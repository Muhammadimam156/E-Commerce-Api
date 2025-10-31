

const express = require('express');
const router = express.Router();



let reviews = [
    { id: 1, productId: 1, author: 'Alice', rating: 5, comment: 'Amazing sound quality, highly recommend!', date: new Date(Date.now() - 86400000).toISOString() },
    { id: 2, productId: 2, author: 'Bob', rating: 4, comment: 'Good value for money, but delivery was a bit slow.', date: new Date(Date.now() - 172800000).toISOString() },
    { id: 3, productId: 1, author: 'Charlie', rating: 5, comment: 'Excellent product, everything I expected.', date: new Date().toISOString() },
];
let nextId = reviews.length + 1; 


router.get('/', (req, res) => {
    const sortedReviews = reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    console.log('GET /api/reviews request received. Sending', sortedReviews.length, 'reviews.');
    res.status(200).json(sortedReviews);
});


router.get('/:id', (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = reviews.find(r => r.id === reviewId);

    if (review) {
        console.log(`GET request for ID: ${reviewId} found.`);
        res.status(200).json(review);
    } else {
        console.log(`GET request for ID: ${reviewId} not found.`);
        res.status(404).json({ message: `Review with ID ${reviewId} not found.` });
    }
});

router.post('/', (req, res) => {
    const newReview = req.body;


    if (!newReview.author || !newReview.comment || !newReview.rating) {
        return res.status(400).json({ message: 'Author, comment, and rating fields are required.' });
    }

    const reviewWithId = {
        ...newReview,
        id: nextId++,
        date: new Date().toISOString(), // Server-side date/time
        rating: parseInt(newReview.rating, 10) || 5 
    };
    
    
    reviews.push(reviewWithId);

    console.log('POST /api/reviews request received. New review added:', reviewWithId);

    
    res.status(201).json(reviewWithId); 
});


module.exports = router;
