const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { uploadFile, getAllFiles } = require('../controllers/FileController');

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Routes
router.post('/upload', upload.single('file'), uploadFile);
router.get('/files', getAllFiles);

module.exports = router;