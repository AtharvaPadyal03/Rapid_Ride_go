const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const authentication = require('../middleware/auth.middleware')
const rideController = require('../controller/ride.controller')

router.post('/create',
    authentication.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicalType').isString().isIn(['auto','car','moto']).withMessage('Invalid ride type'),
    rideController.createRide
)

module.exports = router