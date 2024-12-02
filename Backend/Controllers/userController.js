const userModel  =  require('../Models/userModel')
const userService = require('../Services/userService')
const {validationResult} = require('express-validator')
const blacklistTokenModel = require('../Models/blacklistToken')


module.exports.registerUser = async (req,res,next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname,email,password}= req.body;
    const isUserAlreadyExist = await userModel.findOne({email})
    
    if(isUserAlreadyExist){
        return res.status(400).json({message:"User Already Exists"})
    }


    const hashPassword = await userModel.hashPassword(password)

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password: hashPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({token,user})
}


module.exports.loginUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email,password} =req.body;

    const user = await userModel.findOne({email}).select('+password') //While initializing the user Model we set the select query to false so that when ever any find is run in the user Model it won't return the password by default. TO get the password this .select("+password") attribute is required. 

    if(!user){
        return res.status(401).json({message:"Invalid email or password"})
    }
    
    const isMatch = await user.comparePassword(password)
    
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"})
    }

    const token = user.generateAuthToken();
    res.cookie('token' , token)
    res.status(200).json({token,user , message:"Password Correct"})
}



module.exports.getUserProfile = async (req,res,next)=>{
    res.status(200).json(req.user)

}


module.exports.logoutUser = async(req,res,next)=>{
    res.clearCookie('token')
    const token = req.cookies.token

    await blacklistTokenModel.create({token})

    res.status(200).json({message:"Logged Out"})
}