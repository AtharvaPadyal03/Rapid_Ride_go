
const rideService = require('../services/ride.service')
const {validateResult} = require('express-validator')

module.exports.createRide = async(req,res,next)=>{
    const errors = validateResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    const {pickup,destination,vehicalType} = req.body
    try{
        const ride = await rideService.createRide({
            user:req.user._id,
            pickup,
            destination,
            vehicalType
        })
        return res.status(201).json(ride)
    }catch(err){
        console.log(err)
        return res.status(400).json({messege : err.messege})
    }
}