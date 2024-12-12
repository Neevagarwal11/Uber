const rideModel = require('../Models/rideModel')
const mapService = require('../Services/mapsService')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

async function getFare(pickup , destination){

    if(!pickup || !destination){
        throw new Error('Pickup and destination are required')
    }

    const distanceTime = await mapService.getDistanceTime(pickup , destination)
    

    const baseFare={
        auto:30,
        car:80,
        motorcycle:20
    };

    const perKmRate ={
        auto:10,
        car:15,
        motorcycle:8
    };

    const perMinuteRate={
        auto:2,
        car:5,
        motorcycle:1.5
    };

    // console.log(distanceTime)

    const fare={
        auto:Math.round(baseFare.auto + ((distanceTime.distance.value)/1000 * perKmRate.auto) + ((distanceTime.duration.value)/60 * perMinuteRate.auto)),
        car:Math.round(baseFare.car + ((distanceTime.distance.value)/1000 * perKmRate.car) + ((distanceTime.duration.value)/60 * perMinuteRate.car)),
        motorcycle: Math.round(baseFare.motorcycle + ((distanceTime.distance.value)/1000 * perKmRate.motorcycle) + ((distanceTime.duration.value)/60 * perMinuteRate.motorcycle))
    }

    return fare


}
module.exports.getFare = getFare

function getOtp(num){
    const otp = crypto.randomInt(Math.pow(10, num-1) , Math.pow(10,num)).toString()
    return otp
    
}

module.exports.createRide = async ({user , pickup , destination,vehicleType})=>{

    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('All Fields are required')
    }

    const fare = await getFare(pickup , destination);
    // console.log(fare)
    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp:getOtp(4),
        fare: fare[vehicleType]
    })

    return ride

}