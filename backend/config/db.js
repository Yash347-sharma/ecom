const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1); // Exit process if DB connection fails
    }
    console.log("Connected to the database");
});

// Handle connection errors
db.on('error', (err) => {
    console.error('Database error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        // Handle connection loss
    }
});

module.exports = db;