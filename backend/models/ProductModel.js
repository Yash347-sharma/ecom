// include db.js from config
const db = require("../config/db");

// create product model
const insertProduct = (data) => {
    
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO products SET ?", data, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })

}

// select all products
const getAllProducts = () => {
    
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM products", (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

// select product by id
const getProductById = (id) => {
    
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM products WHERE id = ?", [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

// update product
const updateProduct = (id, data) => {
    
    return new Promise((resolve, reject) => {
        db.query("UPDATE products SET ? WHERE id = ?", [data, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

// delete product
const deleteProduct = (id) => {
    
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM products WHERE id = ?", [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}   

//by category
const getProductsByCategory = (category_id) => {
    
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM products WHERE category_id = ?", [category_id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

//by slug 
const getProductsBySlug = (slug) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM products WHERE slug = ?", [slug], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}


module.exports = { insertProduct, getAllProducts, getProductById, updateProduct, deleteProduct, getProductsByCategory, getProductsBySlug };

