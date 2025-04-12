const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    try {
        if (typeof address !== 'string') {
            throw new Error("Invalid address format");
        }
        const apiUrl = `https://maps.gomaps.pro/maps/api/geocode/json?key=${process.env.GOOGLE_MAP_API}&address=${encodeURIComponent(address)}`;

        const result = await axios.get(apiUrl);
    

        if (result.data.status !== "OK") {
            throw new Error("Something went wrong while fetching user location");
        }

        const location = result.data.results[0]?.geometry?.location;

        return {
            ltd: location.lat,
            lng: location.lng
        }
    } catch (error) {
        throw error;
    }
};

module.exports.getDistanceTime = async (origin,destination)=>{
    
    if(!origin || !destination){
        throw new Error('Origin and destination are required')
    }
    const apiKey = process.env.GOOGLE_MAP_API
    const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${encodeURIComponent(destination)}&origins=${encodeURIComponent(origin)}&key=${apiKey}`
    console.log(url)

    try{
        const response = await axios.get(url)
        if(response.data.status === 'OK'){
            if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                throw new Error('No routes found')
            }
            return response.data.rows[0].elements[0]
        }else{
            throw new Error('Unable to fetch distance and time')
        }
    }catch(err){
        console.log(err)
        throw err
    }
}


module.exports.getAutoCompleteSuggestions = async(input)=>{
    if(!input){
        throw new Error('Address is required')
    }
    const apiKey = process.env.GOOGLE_MAP_API
    const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`
    try{
        const response = await axios.get(url)
        if(response.data.status === 'OK'){
            return response.data.predictions
        }else{
            throw new Error('Unable to fetch suggestion')
        }
    }catch(err){
        console.log(err)
        throw err
    }
}   