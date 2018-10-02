// import from user controller
const express = require('express');
const router = express.Router();

router.all('/*', function(req,res) {
    // res.send(req.originalUrl)
    res.sendFile(require('path').resolve(__dirname + "/../../") + req.originalUrl)
})

module.exports = router;