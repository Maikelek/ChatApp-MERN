const express = require('express');
const router = express.Router(); 

router.get("/", (req, res) => {
    res.send("main user page");
})

module.exports = router;