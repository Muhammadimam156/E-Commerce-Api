// routes/user.route.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/user.model');
const validator = require('validator'); 


// Replace with your real secret in production (use env var)
const JWT_SECRET = process.env.JWT_SECRET || '335317';

// Register route

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, password, email } = req.body
        // console.log(firstName, lastName, password, email );
      const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });
               
        if (!firstName || !lastName) {
            throw new Error('invalid name')
        }
        if (!validator.isEmail(email)) {
            throw new Error('wrong email')
        }
        const hashPasssword = await bcrypt.hash(password, 10)
        console.log(hashPasssword)


        const user = await User({
            firstName,
            lastName,
            email,
            password: hashPasssword
        })
        await user.save()
        const token = jwt.sign({ id: user._id }, "87878787", { expiresIn: "1h" });

        res.cookie("token", token, { httpOnly: true });
        res.send({ msg: "Signup successful ✅", token, userId: user._id });



    } catch (error) {
        res.status(400).send({
            message: "signup error",
            error: error.message

        })
    }

})

// Login route
router.post(`/login`, async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error("user not found")
        }
        console.log(user.password);

        const isMatachedPassword = await bcrypt.compare(password, user.password)
        if (!isMatachedPassword) {
            throw new Error("Invalid credentials")
        }
        const token = jwt.sign({ id: user._id }, "87878787", { expiresIn: "1h" });

        res.cookie("token", token, { httpOnly: true });
        res.send({ msg: "login successful ✅", token, userId: user._id });
    } catch (error) {
        res.status(400).send({
            message: "login error",
            error: error.message
        })
    }

})

router.post("/logout", (req, res) => {
  res.clearCookie("token"); 
  res.json({ msg: "Logout successful ✅" });
});

module.exports = router;
