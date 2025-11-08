// include user model
const UserModel = require("../models/UserModel");
// bcrypt
const bcrypt = require("bcrypt");
// jwt
const jwt = require("jsonwebtoken");

// dotenv
require("dotenv").config();

// verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        req.user = user;
        next();
    });
}

// create user controller
const registerUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {

        // validate first_name, last_name, email, password
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        const user = await UserModel.findUserByEmail(email);
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = await UserModel.insertUser({ first_name, last_name, email, password: hashedPassword, status: 'active' });
        res.status(201).json({ success: true, message: "User registered successfully", userId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// login user controller - FIXED
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // validate email, password
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        
        const user = await UserModel.findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
      
        // check status
        if (user.status !== "active") {
            return res.status(401).json({ success: false, message: "Account is not active" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
        
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "1h" });
        res.status(200).json({ 
            success: true, 
            message: "User logged in successfully", 
            token,
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// profile - FIXED
const profile = async (req, res) => {
    try {
        const userId = req.user.userId;
        
        const user = await UserModel.findUserById(userId); // FIXED: Changed User to UserModel
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        // check status
        if (user.status !== "active") {
            return res.status(403).json({ success: false, message: "User is not active" });
        }
        // remove password from user object
        const { password, ...userWithoutPassword } = user;
        return res.status(200).json({ success: true, message: "User profile fetched successfully", user: userWithoutPassword });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = {
    registerUser,
    loginUser,
    profile,
    verifyToken
}