const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5050;
const multer = require("multer");
app.use('/uploads', express.static('uploads'));
// cors
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});

const testimonials = require("./routes/TestimonialRoutes");
app.use("/api/testimonials", testimonials);

//Mail Routes
const mailRoutes = require("./routes/mailRoutes");
app.use("/api/mail", mailRoutes); 

//Product Routes
const productRoutes = require("./routes/ProductRoutes");
app.use("/api/products", productRoutes);

// User Routes
const userRoute = require("./routes/UserRoute");
app.use("/api/users", userRoute);

//File Routes
const fileRoutes = require("./routes/FileRoutes");
app.use("/api/files", fileRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
