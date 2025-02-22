import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export default generateToken;
