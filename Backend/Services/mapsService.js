const axios = require('axios')
const captainModel = require('../Models/captainModel')

module.exports.getAddressCoordinate = async(address)=>{
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = 'https://maps.googleapis.com/maps/api/geocode/json'

    try{
        const response = await axios.get(url, {
            params: {
              address: address, // Address to geocode
              key: apiKey, // Google Maps API Key
            },
          }); 
            if(response.data.status==='OK'){
            const location = response.data.results[ 0 ].geometry.location
            return{
                ltd:location.lat,
                lng:location.lng
            };

        }else{
            throw new Error('Unable to fetch coordinates')
        }
    }catch(error){
        console.error(error);
        throw error;
    }

}

module.exports.getDistanceTime = async (origin,destination)=>{
    if(!origin || !destination){
        throw new Error('Origin and Destination are required')
    }

    const apiKey = process.env.GOOGLE_MAPS_API
    const url = 'https://maps.googleapis.com/maps/api/distancematrix/json';

    try{

        const response = await axios.get(url,{
            params:{
                origins:origin,
                destinations:destination,
                key:apiKey
            },

        })

        if(response.data.status ==='OK'){

            if(response.data.rows[0]?.elements[0].status === 'ZERO_RESULTS'){
                throw new Error('No routes found')
            }
            return response.data.rows[0].elements[0]

        }else{
            throw new Error('Unable to fetch distance and time between the origin and the destination')
        }



    }catch(err){
        console.log(err)
        throw err;
    }

}

module.exports.getSuggestion = async (input)=>{
    if(!input){
        throw new Erros('Query is required')
    }

    const apiKey = process.env.GOOGLE_MAPS_API
    const url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json'

    try{
        const response = await axios.get(url , {
            params:{
                input: input, // The address or partial address string
                key: apiKey, // Your API key
                types: 'geocode', 
            }
        })

        if(response.data.status === 'OK'){
            return response.data.predictions.map((prediction)=>({
                description:prediction.description,
                placeId:prediction.place_id,
                offset:prediction.offset
            }));
            // return response.data.predictions.map((prediction) => ({
            //     description: prediction.description,
            //     placeId: prediction.place_id,
            //   }));
        }else{
            throw new Error('Unable to fetch Suggestion')
        }
    }catch(err){
        console.log(err)
        throw err
    }

}

module.exports.getCaptainsInRadius = async (ltd,lng,radius)=>{

    //radius in km

    const captains = await captainModel.find({
        location:{
            $geoWithin:{
                $centerSphere:[[ltd,lng] , radius/6371]
            }
        }
    })

    return captains

}