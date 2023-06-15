const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")

const User = require("../models/User")


router.post("/register", async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 8)
        const user = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        await user.save();
        res.status(200).json({message: "Registered"});

    } catch(error) {
        console.log(error);
    }
})

router.post("/login", async (req, res) => {
    
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json({message: "User not found"});

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
        !isPasswordValid && res.status(400).json({message: "Incorrect password"})

        res.status(200).json({message: "Authorized"})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;