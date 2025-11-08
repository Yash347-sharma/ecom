const express = require("express");
const router = express.Router();

// import user controller
const userController = require("../controllers/UserController");

// import middleware
const checkToken = require("../middleware/CheckToken");

// create user route
router.post("/register", userController.registerUser);

// login user route
router.post("/login", userController.loginUser);

// profile route - protected
router.get("/profile", userController.verifyToken, userController.profile); // FIXED: Added verifyToken middleware

module.exports = router;