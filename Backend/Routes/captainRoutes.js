const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const captainController = require('../Controllers/captainController')

router.post('/register' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name shall consist atleat 3 characters.'),
    body('password').isLength({min:6}).withMessage("Password shall be minimun 6 characters long."),
    body('vehicle.color').isLength({min:3}).withMessage('Vehicle color must contain atleast 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('Vehicle Plate must contain atleast 3 characters'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Vehicle Capacity must contain atleast 3 characters'),
    body('vehicle.vehicleType').isIn(['car' , 'motorcycle' , 'auto']).withMessage('Vehicle Capacity must contain atleast 3 characters'),
],
    captainController.registerCaptain
)


module.exports = router