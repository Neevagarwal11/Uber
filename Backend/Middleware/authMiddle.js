const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const blacklistToken = require('../Models/blacklistToken');
const captainModel = require('../Models/captainModel');


module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.send(401).json({message :"Unauthorized"})
    }

    const isBlackListed = await userModel.findOne({token:token})
    if(isBlackListed){
        return res.status(401).json({message:'Unauthorized'})
    }


    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const user = await blacklistToken.findById(decoded._id)

        req.user = user

        return next();

    }catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }
}

module.exports.authCaptain = async(req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message:"Unauthorized (no Token)"})
    }

    const isBlackListed = await blacklistToken.findOne({token:token})
    if(isBlackListed){
        return res.status(401).json({message:"Unauthorized (in blacklist)"})
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;
        //Very Imp as without this the code flow will not proceed after this line of code to the controller
        return next();  
        
    }catch(err){
        console.log(err)
        return res.status(400).json({message:"Unauthorized"})
    }
}