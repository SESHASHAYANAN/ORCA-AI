require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Temporary directory for uploaded files

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// Enable CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/api/identify-plant', upload.single('image'), async (req, res) => {
    const file = req.file;
    console.log('Received file:', file); // Log the received file

    if (!file) {
        console.log('No file uploaded'); // Log if no file is uploaded
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    try {
        const imageData = fs.readFileSync(file.path);
        console.log('Image data length:', imageData.length);

        const imageParts = [
            {
                inlineData: {
                    data: imageData.toString('base64'),
                    mimeType: 'image/jpeg'
                }
            }
        ];

        // Simulate a response from the AI model
        const plantData = {
            name: 'Example Plant Name',
            description: 'Example plant description goes here.'
        };

        // Save plant data to JSON file
        const dataFilePath = path.join(__dirname, 'data', 'plant-data.json');
        if (!fs.existsSync(dataFilePath)) {
            fs.writeFileSync(dataFilePath, JSON.stringify([])); // Create an empty array if the file doesn't exist
        }

        const existingData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
        existingData.push(plantData);
        fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

        res.json(plantData);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Error identifying plant. Please try again.' });
    } finally {
        // Clean up the uploaded file
        fs.unlink(file.path, (err) => {
            if (err) console.error('Error deleting file:', err);
        });
    }
});

app.get('/api/plants', (req, res) => {
    const dataFilePath = path.join(__dirname, 'data', 'plant-data.json');
    if (fs.existsSync(dataFilePath)) {
        const plants = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
        res.json(plants);
    } else {
        res.json([]); // Send an empty array if the file doesn't exist
    }
});

app.post('/api/plants', (req, res) => {
    const plantData = req.body;
    const dataFilePath = path.join(__dirname, 'data', 'plant-data.json');
    const existingData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    existingData.push(plantData);
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
    res.json(plantData);
});

const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
