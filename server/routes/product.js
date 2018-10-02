// import from user controller
const { productController } = require('../controllers/productController')
const express = require('express');
const router = express.Router();

router.get('/', productController.index)
router.post('/create', productController.create)
router.delete('/delete', productController.delete)

module.exports = router