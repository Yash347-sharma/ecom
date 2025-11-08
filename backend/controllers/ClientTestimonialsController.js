// Client Testimonials Controller
const ClientTestimonials = require("../models/ClientTestimonials");

const getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await ClientTestimonials.getAllClientTestimonials();
        return res.status(200).json({
            success: true,
            testimonials
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            error: "Failed to fetch testimonials"
        });
    }
};

// insert Client Testimonials
const insertClientTestimonials = async (req, res) => {
    try {
        console.log(req.body);
        const { name, img, designation, review, status } = req.body;
        
        // Validate required fields
        if (!name || !designation || !review) {
            return res.status(400).json({
                success: false,
                error: "Name, designation, and review are required fields"
            });
        }
        
        const result = await ClientTestimonials.insertClientTestimonials(name, img, designation, review, status);
        return res.status(201).json({
            success: true,
            message: "Testimonial added successfully",
            id: result.insertId
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            error: "Failed to insert testimonial"
        });
    }
};

// Add these placeholder functions for the routes that are defined but not implemented
const getClientTestimonialById = async (req, res) => {
    return res.status(501).json({
        success: false,
        error: "Get by ID not implemented yet"
    });
};

const updateTestimonial = async (req, res) => {
    return res.status(501).json({
        success: false,
        error: "Update not implemented yet"
    });
};

const deleteTestimonial = async (req, res) => {
    return res.status(501).json({
        success: false,
        error: "Delete not implemented yet"
    });
};

module.exports = {
    getAllTestimonials,
    insertClientTestimonials,
    getClientTestimonialById,
    updateTestimonial,
    deleteTestimonial
};