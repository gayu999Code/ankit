import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const router = express.Router();

// @route POST /api/users/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const { name, phone, email, password } = req.body;
  try {
    
    // Log the received data
    console.log('Received registration data:', req.body);

    // Add validation here
    if (!name || !phone || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Your registration logic here
    // ...

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
