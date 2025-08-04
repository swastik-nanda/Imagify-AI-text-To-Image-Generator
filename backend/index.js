import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../backend/db.js";
import userRouter from "./routes/userRoute.js";
import imageRouter from "./routes/imageRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

// Use top-level await here
await connectDB();

app.use("/api/user/", userRouter);
app.use("/api/image/", imageRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});
app.get("/ping", (req, res) => {
  res.send("pong");
});
console.log(">>> Running index.js");

app.listen(PORT, () => console.log(`Backend Connected at Port: ${PORT}`));
