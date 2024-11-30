const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../Controllers/userController')

router.post('/register' ,[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name shall consist atleat 3 characters.'),
    body('password').isLength({min:6}).withMessage("Password shall be minimun 6 characters long.")

],
    userController.registerUser
)     



module.exports = router
