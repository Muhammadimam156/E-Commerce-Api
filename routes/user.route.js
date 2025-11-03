// routes/user.route.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/user.model');


// Replace with your real secret in production (use env var)
const JWT_SECRET = process.env.JWT_SECRET || '335317';

// Register route
router.post(
    '/register',
    [
        check('username').trim().notEmpty().withMessage('Username is required'),
        check('email').isEmail().withMessage('Valid email is required'),
        check('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            const { username, email, password } = req.body;

            // check existing user
            const existing = await User.findOne({ email: email.toLowerCase() });
            if (existing) return res.status(400).json({ message: 'Email already in use' });

            // hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                username,
                email: email.toLowerCase(),
                password: hashedPassword,
            });

            const savedUser = await newUser.save();

            // create jwt
            const token = jwt.sign(
                { id: savedUser._id.toString(), isAdmin: !!savedUser.isAdmin },
                JWT_SECRET,
                { expiresIn: '1d' }
            );

            res.status(201).json({
                message: 'User registered successfully',
                userId: savedUser._id,
                token,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

// Login route
router.post(
    '/login',
    [
        check('email').isEmail().withMessage('Valid email is required'),
        check('password').notEmpty().withMessage('Password is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email: email.toLowerCase() });
            if (!user) return res.status(401).json({ message: 'Invalid credentials' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

            const token = jwt.sign(
                { id: user._id.toString(), isAdmin: !!user.isAdmin },
                JWT_SECRET,
                { expiresIn: '1d' }
            );

            res.status(200).json({
                message: 'Login successful',
                userId: user._id,
                isAdmin: !!user.isAdmin,
                token,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);

module.exports = router;
