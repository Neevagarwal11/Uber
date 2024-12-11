const express = require('express')
const router = express.Router()
const {body}  = require('express-validator')
const rideController = require('../Controllers/rideController')
const authMiddleware  =require('../Middleware/authMiddle')

router.post('/create' , authMiddleware.authUser , 
    body('pickup').isString().isLength({min:3}).withMessage('invalid Pickup Address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto' , 'car' , 'motorcycle']).withMessage('Invalid Vehicle Type'),
    rideController.createRide
 )