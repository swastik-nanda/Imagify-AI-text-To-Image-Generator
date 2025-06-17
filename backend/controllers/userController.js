import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Razorpay from "razorpay";
import transactionModel from "../models/transactionModel.js";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      success: true,
      token,
      user: { name: user.name },
      message: "User Signed in successfully!",
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({
        success: true,
        token,
        user: { name: user.name },
        message: "User Logged in successfully!",
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (err) {}
};

export const userCredits = async (req, res) => {
  try {
    const userId = req.user.id; // Use req.user from middleware
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    res.json({
      success: true,
      credits: user.creditBalance,
      user: { name: user.name },
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_TEST_KEY_ID,
  key_secret: process.env.RAZORPAY_TEST_KEY_SECRET,
});

export const paymentRazorPay = async (req, res) => {
  try {
    const userId = req.user.id; // Use req.user from middleware
    const { planId } = req.body;
    const userData = await userModel.findById(userId);

    if (!userId || !planId) {
      return res.status(400).json({
        success: false,
        message: "Missing Details",
      });
    }

    let credits, plan, amount, date;
    switch (planId) {
      case "Basic":
        (plan = "Basic"), (credits = 100), (amount = 10);
        break;
      case "Advanced":
        (plan = "Advanced"), (credits = 500), (amount = 50);
        break;
      case "Business":
        (plan = "Business"), (credits = 5000), (amount = 250);
        break;
      default:
        return res.status(400).json({
          success: false,
          message: "Plan Not Found!",
        });
    }

    date = Date.now();

    const transactionData = {
      userId,
      plan,
      amount,
      credits,
      date,
    };

    const newTransaction = await transactionModel.create(transactionData);
    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: newTransaction._id,
    };
    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(400).json({
          success: false,
          message: error,
        });
      }

      res.status(200).json({
        success: true,
        order,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const verifyRazorPay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === "paid") {
      const transactionDataInfo = await transactionModel.findById(
        orderInfo.receipt
      );
      if (transactionDataInfo.payment) {
        return res.status(400).json({
          success: false,
          message: "Payment Failed",
        });
      }

      const userDataInfo = await userModel.findById(transactionDataInfo.userId);
      const creditBalance =
        userDataInfo.creditBalance + transactionDataInfo.credits;
      await userModel.findByIdAndUpdate(userDataInfo._id, { creditBalance });
      await transactionModel.findByIdAndUpdate(transactionDataInfo._id, {
        payment: true,
      });

      res.status(200).json({
        success: true,
        message: "Credits Added",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Payment Failed",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
