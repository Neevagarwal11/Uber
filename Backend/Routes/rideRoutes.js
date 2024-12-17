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

router.post('/confirm' ,
   authMiddleware.authCaptain,
   body('rideId').isMongoId().withMessage('Invalid ride ID'),
   rideController.confirmRide
)

router.get('/start-ride' , 
   authMiddleware.authCaptain,
   query('rideId').isMongoId().withMessage('Invalid Ride Id'),
   query('otp').isString().isLength({min:4 , max:4}).withMessage('Invalid OTP'),
   rideController.startRide
)

router.post('/end-ride' , 
   authMiddleware.authCaptain,
   body('rideId').isMongoId().withMessage('Invalid Ride Id'),
   rideController.endRide
)

 module.exports = router