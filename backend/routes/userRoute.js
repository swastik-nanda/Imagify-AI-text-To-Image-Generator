import express from "express";
import {
  register,
  login,
  userCredits,
  paymentRazorPay,
  verifyRazorPay,
} from "../controllers/userController.js"; // <-- add .js here
import { userAuth } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/credits", userAuth, userCredits);
userRouter.post("/pay-razor", userAuth, paymentRazorPay);
userRouter.post("/verify-razor", verifyRazorPay);

export default userRouter;
