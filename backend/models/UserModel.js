// db
const db = require("../config/db");

// create user model
const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM users WHERE email = ?", [email], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
}

// insert
const insertUser = (user) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO users SET ?", user, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
}
// findUserById
const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM users WHERE id = ?", [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
}
module.exports = {
   findUserByEmail,
    findUserById,
    insertUser
}