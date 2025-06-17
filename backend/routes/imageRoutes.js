import express from "express";
import { generateImg } from "../controllers/imageController.js";
import { userAuth } from "../middleware/auth.js";

const imageRouter = express.Router();
imageRouter.post("/generate-image", userAuth, generateImg);
export default imageRouter;
