const express = require('express')
const router = express.Router()
const {body , query}  = require('express-validator')
const rideController = require('../Controllers/rideController')
const authMiddleware  =require('../Middleware/authMiddle')

router.post('/create' , authMiddleware.authUser , 
    body('pickup').isString().isLength({min:3}).withMessage('invalid Pickup Address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto' , 'car' , 'motorcycle']).withMessage('Invalid Vehicle Type'),
    rideController.createRide
 )

 router.get('/get-fare' , authMiddleware.authUser,
    query('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup Location'),
    query('destination').isString().isLength({min:3}).withMessage("Invalid Destination Location")
    , rideController.getFare)

 module.exports = router