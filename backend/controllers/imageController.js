import axios from "axios";
import FormData from "form-data";
import userModel from "../models/userModel.js";

export const generateImg = async (req, res) => {
  try {
    const userId = req.user.id; // Use req.user from middleware
    const prompt = req.body.prompt;
    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.status(400).json({
        success: false,
        message: "Missing Details",
      });
    }

    if (user.creditBalance <= 0) {
      return res.status(400).json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_APIKEY,
          ...formData.getHeaders(),
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.status(200).json({
      success: true,
      message: "Image Created",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
