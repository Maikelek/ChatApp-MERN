const express = require('express');
const router = express.Router(); 

const User = require("../models/User")


router.post("/register", async (req, res) => {
    const user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        await user.save();
        res.status(200).json(user)
    } catch(error) {
        console.log(error)
    }
})

module.exports = router;