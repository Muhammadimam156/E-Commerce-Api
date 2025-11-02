// // Yeh file Mongoose ke zariye User model ko define karti hai.
// // Ismein password hashing aur User/Admin differentiation shamil hai.

// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// // --- USER SCHEMA ---
// const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, 'Username zaroori hai'],
//         unique: true,
//         trim: true,
//     },
//     email: {
//         type: String,
//         required: [true, 'Email zaroori hai'],
//         unique: true,
//         lowercase: true,
//         // Sahi email format ke liye validation
//         match: [/.+@.+\..+/, 'Sahi email address daalein'], 
//     },
//     password: {
//         type: String,
//         required: [true, 'Password zaroori hai'],
//         minlength: [6, 'Password kam se kam 6 characters ka hona chahiye'],
//     },
//     // Admin access control (sirf admin hi products ko control kar sakta hai)
//     isAdmin: { 
//         type: Boolean,
//         default: false, // Default naya user admin nahi hota
//     },
// }, {
//     timestamps: true 
// });

// // --- BCRYPT PASSWORD HASHING (Pre-Save Hook) ---
// // Database mein save hone se pehle password ko hash karein
// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// // --- PASSWORD COMPARISON METHOD (Login ke liye) ---
// UserSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// // Model ko export karein
// const User = mongoose.model('User', UserSchema);

// module.exports = User;
