// import from user controller
const userController = require('')
const express = require('express');
const router = express.Router();

// Create
router.post('/create', userController.create)
// Read
router.get('/', userController.index)
// Update
router.put('/update', userController.update)
// Delete
router.delete('/delete', userController.delete)
