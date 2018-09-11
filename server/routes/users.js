// import from user controller
const userController = require('../controllers/userController')
const express = require('express');
const router = express.Router();

// read
router.get('/', userController.index)
// Update
router.put('/update', userController.update)
// Delete
router.delete('/delete', userController.delete)
// Create
router.post('/create', userController.create)

module.exports = router;