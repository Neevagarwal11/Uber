const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const blacklistToken = require('../Models/blacklistToken');
const captainModel = require('../Models/captainModel');



module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies.token;
    console.log(token , "Auth")
    if(!token){
        return res.status(401).json({message :"Unauthorized No cookie"})
    }

    const isBlackListed = await userModel.findOne({token:token})
    if(isBlackListed){
        return res.status(402).json({message:'Unauthorized Cookie Blacklisted'})
    }


    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)

        req.user = user

        return next();

    }catch(err){
        console.log(err)
        return res.status(403).json({message:"Unauthorized Cookie Auth Failed"})
    }
}

module.exports.authCaptain = async(req,res,next)=>{
    const token = req.cookies.token
    console.log(`${token} + JNJNN`)
    if(!token){
        return res.status(404).json({message:"Unauthorized (no Token)"})
    }

    const isBlackListed = await blacklistToken.findOne({token:token})
    if(isBlackListed){
        return res.status(402).json({message:"Unauthorized (in blacklist)"})
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;
        //Very Imp as without this the code flow will not proceed after this line of code to the controller
        return next();  
        
    }catch(err){
        console.log(err)
        return res.status(403).json({message:"Unauthorized"})
    }
}