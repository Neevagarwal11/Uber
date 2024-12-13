const rideService = require('../Services/rideService')
const {validationResult} = require('express-validator')

module.exports.createRide = async(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {pickup, destination , vehicleType} = req.body;

    try{

        

        const ride = await rideService.createRide({user:req.user._id , pickup , destination , vehicleType})
        return res.status(201).json(ride)
    }catch(err){
        return res.status(401).json({message: "Error in Controller"})
    }


}

module.exports.getFare = async(req,res)=>{
     const errors = validationResult(req)
     if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
     }

     const {pickup , destination} = req.query
     console.log(pickup)
     console.log(destination)
     try{
        const fare = await rideService.getFare(pickup,destination)
        return res.status(200).json(fare)
     }catch(err){
        return res.status(500).json({message: err.message})
     }
}