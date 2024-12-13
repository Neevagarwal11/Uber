const blacklistToken = require('../Models/blacklistToken')
const captainModel = require('../Models/captainModel')
const captainService = require('../Services/captainService')
const {validationResult}  = require('express-validator')

module.exports.registerCaptain = async (req,res,next) =>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname,email,password,vehicle} = req.body
    const isCaptainAlreadyExist = await captainModel.findOne({email})

    if(isCaptainAlreadyExist){
        return res.status(400).json({message:"Captain Already Exists"})
    }

    const hashedPassword = await captainModel.hashPassword(password)

    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType,
    });

    const token = captain.generateAuthToken()
    res.status(201).json({token,captain})

}


module.exports.loginCaptain = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors){
        return res.status(401).json({errors:errors.array() , message:"Captain Validation Error"})
    }

    const {email , password} = req.body

    const captain= await captainModel.findOne({email}).select('+password')     //In the model password is given select as false so when ever we need to get the data we won't fetch the password to fetch it we need to write the select statement

    if(!captain){
        return res.status(401).json({message:"Invalid email or password"})
    }
    
    const isMatch = await captain.comparePassword(password)
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"})
    }

    const token =  captain.generateAuthToken();
    res.cookie('token' ,token , {
        sameSite:'None',
        httpOnly:true
    })

    res.status(201).json({token , captain , message:"Captain Login Successfull"})
}

module.exports.getCaptainProfile = async(req,res,next)=>{
    res.status(201).json({captain : req.captain})
}

module.exports.logoutCaptain = async(req,res,next)=>{
    const token = req.cookies.token

    await blacklistToken.create({token})

    res.clearCookie('token')

    res.status(200).json({message:"Captain Loged Out"})
}