const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Load reviews from the JSON file
const loadReviews = () => {
    const data = fs.readFileSync(path.join(__dirname, 'data', 'reviews.json'), 'utf8');
    return JSON.parse(data);
};

// Save reviews to the JSON file
const saveReviews = (reviews) => {
    fs.writeFileSync(path.join(__dirname, 'data', 'reviews.json'), JSON.stringify(reviews, null, 2));
};

// Endpoint to get reviews
app.get('/reviews', (req, res) => {
    const reviews = loadReviews();
    res.json(reviews);
});

// Endpoint to submit a new review
app.post('/reviews', (req, res) => {
    const reviews = loadReviews();
    const newReview = req.body;

    // Add a timestamp
    newReview.timestamp = new Date().toISOString();
    
    reviews.push(newReview);
    saveReviews(reviews);

    res.status(201).json(newReview);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
