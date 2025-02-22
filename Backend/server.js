import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
// import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import process from "process";

dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5000', // or whatever port your React app is running on
    credentials: true
  }));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);
const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
