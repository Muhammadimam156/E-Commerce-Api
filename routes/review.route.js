const express = require('express');
const router = express.Router();
const Review = require('../models/review.model');

// GET all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find().sort({ date: -1 });
        console.log('GET /api/reviews request received. Sending', reviews.length, 'reviews.');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET review by ID
router.get('/:id', async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (review) {
            console.log(`GET request for ID: ${req.params.id} found.`);
            res.status(200).json(review);
        } else {
            console.log(`GET request for ID: ${req.params.id} not found.`);
            res.status(404).json({ message: `Review not found.` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST new review
router.post('/', async (req, res) => {
    try {
        const newReview = new Review({
            productId: req.body.productId,
            author: req.body.author,
            rating: parseInt(req.body.rating, 10) || 5,
            comment: req.body.comment,
            date: new Date()
        });

        if (!newReview.author || !newReview.comment || !newReview.rating) {
            return res.status(400).json({ message: 'Author, comment, and rating fields are required.' });
        }

        const savedReview = await newReview.save();
        console.log('POST /api/reviews request received. New review added:', savedReview);
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
