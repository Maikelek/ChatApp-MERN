const express = require('express');
const router = express.Router(); 

router.get("/", (req, resp) => {
    resp.send("Auth")
})

module.exports = router;