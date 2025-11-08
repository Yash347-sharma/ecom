const db = require('../config/db');

// Upload single file
const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded!' });
  }

  const { filename, mimetype, size } = req.file;
  const filepath = `/uploads/${filename}`;

  const sql = 'INSERT INTO files (filename, filepath, mimetype, size) VALUES (?, ?, ?, ?)';
  db.query(sql, [filename, filepath, mimetype, size], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).json({ success: false, message: 'Database Error' });
    }

    res.json({
      success: true,
      message: 'File uploaded successfully!',
      file: {
        id: result.insertId,
        name: filename,
        url: `http://localhost:5050${filepath}`,
        type: mimetype,
        size
      }
    });
  });
};

// Get all uploaded files
const getAllFiles = (req, res) => {
  const sql = 'SELECT * FROM files ORDER BY uploaded_at DESC';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database Error' });
    res.json({ success: true, files: results });
  });
};

module.exports = { uploadFile, getAllFiles };