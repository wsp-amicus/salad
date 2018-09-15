// import from user controller
const userController = require('../controllers/userController')
const express = require('express');
const router = express.Router();

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/forgetPassword', userController.forgetPassword)
router.put('/createNewPassword', userController.createNewPassword)

module.exports = router;