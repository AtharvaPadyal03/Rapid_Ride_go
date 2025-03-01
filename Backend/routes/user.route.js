const express = require('express');
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../controller/user.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atlist 3 chracter long'),
    body('password').isLength({min :8}).withMessage('Password must me minimus 8 chracter long')
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:8}).withMessage('password must be at least 8 characters long')
],
userController.login
)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)

router.get('/logout',authMiddleware.authUser,userController.logoutUser)

module.exports = router