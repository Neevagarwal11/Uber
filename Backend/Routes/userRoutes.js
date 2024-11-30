const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../Controllers/userController')


//Register Route
router.post('/register' ,[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First Name shall consist atleat 3 characters.'),
    body('password').isLength({min:6}).withMessage("Password shall be minimun 6 characters long.")
    
],
userController.registerUser
)     

//Login Route
router.post('/login' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage("Password shall be minimun 6 characters long.")
],
    userController.loginUser
)


module.exports = router
