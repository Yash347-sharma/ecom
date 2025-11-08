const express = require("express");
const router = express.Router();
const ClientTestimonialController = require("../controllers/ClientTestimonialsController");

router.get("/", ClientTestimonialController.getAllTestimonials);
router.get("/:id", ClientTestimonialController.getClientTestimonialById);
router.post("/", ClientTestimonialController.insertClientTestimonials); // Fixed function name
router.put("/:id", ClientTestimonialController.updateTestimonial);
router.delete("/:id", ClientTestimonialController.deleteTestimonial);

module.exports = router;