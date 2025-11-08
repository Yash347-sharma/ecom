// jwt
const jwt = require("jsonwebtoken");
// dotenv
require("dotenv").config();
// middlerware token check
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Unauthorized or Token expired" });
        }
        req.user = user;
        next();
    });
}

// 

module.exports = { verifyToken };
