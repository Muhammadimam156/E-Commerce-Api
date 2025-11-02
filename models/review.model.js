const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true
    },
      rating: {
        type: Number,
        required: [true, 'Please provide rating'],
        min: 1,
        max: 5,
    },
 comment: {
        type: String,
        required: [true, 'Please provide review text'],
    },
   productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
