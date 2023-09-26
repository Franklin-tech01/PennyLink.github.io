// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

// Serve static files (uploaded images)
app.use(express.static('uploads'));

// Handle POST request to upload a profile picture
app.post('/upload-profile-picture', upload.single('profilePicture'), (req, res) => {
    if (req.file) {
        // File uploaded successfully
        res.status(200).json({ message: 'Profile picture uploaded successfully.' });
    } else {
        // No file uploaded
        res.status(400).json({ error: 'No file uploaded.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
