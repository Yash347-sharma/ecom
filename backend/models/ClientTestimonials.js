const connection = require('../config/db');

const getAllClientTestimonials = async () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM testimonials', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    })
}

// insert 
const insertClientTestimonials = async (name, img, designation, review, status) => {
    return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO testimonials (name, img, designation, review, status) VALUES (?, ?, ?, ?, ?)', 
            [name, img, designation, review, status || 1], // Default status to 1 if not provided
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            }
        );
    })
}

// Add these placeholder functions for future implementation
const getClientTestimonialById = async (id) => {
    // Implementation needed
}

const updateTestimonial = async (id, name, img, designation, review, status) => {
    // Implementation needed
}

const deleteTestimonial = async (id) => {
    // Implementation needed
}

module.exports = {
    getAllClientTestimonials,
    insertClientTestimonials,
    getClientTestimonialById,
    updateTestimonial,
    deleteTestimonial
};