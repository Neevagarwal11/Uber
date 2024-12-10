const axios = require('axios')

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