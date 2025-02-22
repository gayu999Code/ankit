import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization"); // Get token from request headers

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next(); // Move to the next middleware/route
  } catch (error) {
    res.status(401).json({ message: "Invalid or Expired Token" });
  }
};

export default authMiddleware;
