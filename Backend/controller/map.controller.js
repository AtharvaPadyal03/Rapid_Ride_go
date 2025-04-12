const mapServices = require('../services/map.services')
const {validationResult} = require('express-validator')

module.exports.getCoordinates = async(req,res)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
    const {address} = req.query
    try{
        const coordinate = await mapServices.getAddressCoordinate(address)
        res.status(200).json(coordinate)
    }catch(error){
        console.log(error)
        res.status(404).json({messege:"Coordinate not found"})
    }
}

module.exports.getDistanceTime = async(req,res,next)=>{
    try{
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()})
        }
        const {origin,destination} = req.query
        const distanceTime = await mapServices.getDistanceTime(origin,destination)
        res.status(200).json(distanceTime)
    }catch(err){
        console.log(err)
        res.status(500).json({messege:'Internal server error'})
    }
}

module.exports.getAutoCompleteSuggestions = async(req,res,next)=>{
   try {
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()})
        }
        const {input} = req.query
        const suggestions = await mapServices.getAutoCompleteSuggestions(input)
        res.status(200).json(suggestions)
   } catch (error) {
        console.log(error)
        res.status(500).json({messege:"Internal Server Error"})
   }
}