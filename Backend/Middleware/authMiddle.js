const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


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
        const user = await userModel.findById(decoded._id)

        req.user = user

        return next();

    }catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }
}