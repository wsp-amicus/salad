// import from user controller
const { userController, validateEmail } = require('../controllers/userController')
const express = require('express');
const router = express.Router();

router.post('/register', validateEmail, userController.register)
router.post('/login', userController.login)
router.get('/forgetPassword', userController.forgetPassword)
router.put('/createNewPassword', userController.createNewPassword)
router.post('/verification', userController.verification)
router.get('/index', userController.index)
router.get('/find', userController.find)
router.post('/update', userController.update)
router.delete('/delete', userController.delete)
router.patch('/changePassword', userController.changePassword)

module.exports = router;
