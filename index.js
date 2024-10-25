import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import User from "./User.js";

dotenv.config();
const app = express();

// Enable CORS for the React frontend
app.use(
  cors({
    origin: "http://localhost:5173", // React frontend URL
    credentials: true, // Allow cookies and authorization headers
  })
);

// Other middleware and routes
app.use(express.json());

app.get("/", async (req, res) => {
  const users = await User.find({});

  res.json({ users });
});

app.listen(3000, () => {
  connectDB();
  console.log("Backend running on http://localhost:3000");
});
