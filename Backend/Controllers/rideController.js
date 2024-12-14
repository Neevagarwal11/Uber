const rideService = require('../Services/rideService')
const {validationResult} = require('express-validator')
const mapService = require('../Services/mapsService')
const {sendMessageToSocketId}  = require('../socket')
const rideModel = require('../Models/rideModel')

module.exports.createRide = async(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {userId,pickup, destination , vehicleType} = req.body;

    try{

        const ride = await rideService.createRide({user:req.user._id , pickup , destination , vehicleType})
         res.status(201).json(ride)

        const pickupCoordinates = await mapService.getAddressCoordinate(pickup)
        // console.log(pickupCoordinates)   OK
            const CaptainsInRadius = await mapService.getCaptainsInRadius(pickupCoordinates.ltd , pickupCoordinates.lng , 2)
        // console.log(CaptainsInRadius)    OK

            ride.otp = ''
            const rideWithUser = await rideModel.findOne({_id: ride._id}).populate('user')
            console.log(rideWithUser)

        CaptainsInRadius.map(captain=>{

            sendMessageToSocketId(captain.socketId , {
                event:'new-ride',
                data:rideWithUser
            }) 
        })
        


    }catch(err){
        console.log(err)
        return res.status(401).json({message: "Error in Ride Controller"})
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