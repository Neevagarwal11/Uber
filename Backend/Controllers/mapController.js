const { map } = require('../app')
const mapService = require('../Services/mapsService')
const {validationResult} = require('express-validator')


module.exports.getCoordinates = async(req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {address} =req.query 

    try{
        const coordinates = await mapService.getAddressCoordinate(address)
        res.status(200).json(coordinates)
    }catch(error){
        res.status(404).json({message:"Coordinate Not Found"})
    }
}

module.exports.getDistance = async(req, res,next) =>{
    try{

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        const {origin , destination}  = req.query

        const distanceTime = await mapService.getDistanceTime(origin , destination)

        res.status(200).json(distanceTime)


    }catch(err){
        console.log(err)
        throw err;
    }
}

module.exports.getSuggestion = async (req,res,next)=>{

    try{
        const errors=  validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const {input} = req.query

        const suggestion = await mapService.getSuggestion(input)
        console.log(suggestion)
        res.status(200).json(suggestion)

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }
}