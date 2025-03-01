const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const captainController = require('../controller/captain.controller')
const auth = require('../middleware/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atlist 3 chracter long'),
    body('password').isLength({min :8}).withMessage('Password must me minimus 8 chracter long'),
    body('vehical.color').isLength({min:3}).withMessage('Color must be atleast 3 character long'),
    body('vehical.plate').isLength({min:3}).withMessage('Plate must be atleast 3 character long'),
    body('vehical.capacity').isLength({min:1}).withMessage('Vehical must atleast have capacity of 1'),
    body('vehical.vehicalType').isIn(['car','auto','motorcycle']).withMessage('Invalid vehical type'),
],
    captainController.registerCaptain
)
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min :8}).withMessage('Password must me minimus 8 chracter long'),
],
    captainController.loginCaptain
)
router.get('/profile',auth.authCaptain,captainController.getCaptainProfile)
router.get('/logout',auth.authCaptain,captainController.logoutCaptain)
module.exports = router