// import from user controller
const { productController } = require('../controllers/productController')
const express = require('express');
const router = express.Router();

router.get('/', productController.index)

module.exports = router