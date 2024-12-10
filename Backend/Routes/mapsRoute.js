const express= require('express')
const router = express.Router()
const authMiddleware = require('../Middleware/authMiddle')
const mapController = require('../Controllers/mapController')
const {query} = require('express-validator')

router.get('/get-coordinates',
    query('address').isString().isLength({min:3})
    ,authMiddleware.authUser , mapController.getCoordinates)


router.get('/get-distance-time' ,
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authMiddleware.authUser,
    mapController.getDistance
)

router.get('/get-suggestion' , 
    query('input').isString().isLength({min:3}),
    authMiddleware.authUser,
    mapController.getSuggestion
)

module.exports = router