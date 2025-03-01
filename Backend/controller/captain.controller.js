const captainModel = require('../models/captain.model')
const captainService = require('../services/captail.service')
const {validationResult} = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.registerCaptain = async(req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname,email,password,vehical} = req.body

    const findCaptain = await captainModel.findOne({email})

    if(findCaptain){
        console.log({
            findCaptain,messege:'hey'
        })
        return res.status(400).json({messege:'Captain alreadyy exist'})
    }

    const firstname = fullname.firstname
    const lastname = fullname.lastname
    const hashPassword = await captainModel.hashPassword(password)
    const captain = await captainService.createCaptain({
        firstname,
        lastname,
        email,
        password:hashPassword,
        color:vehical.color,
        plate:vehical.plate,
        capacity:vehical.capacity,
        vehicalType:vehical.vehicalType
    })
    console.log(captain)
    const token = captain.generateAuthToken()

    return res.status(201).json({messege:'User created successfully',token,captain})
}

module.exports.loginCaptain = async(req,res,next)=>{
    const error = validationResult(req)

    if(!error.isEmpty()){
        return res.status(400).json({errors:error.array()})
    }

    const{email,password} = req.body

    const captain = await captainModel.findOne({email}).select('+password')

    if(!captain){
        return res.status(401).json({message:"Invalid email or password"})
    }

    const isMatch = await captain.comparePassword(password)

    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"})
    }

    const token = captain.generateAuthToken()
    
    res.cookie('token',token)
    res.status(200).json({token,captain}) 
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({captain:req.captain})
}

module.exports.logoutCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]
    await blacklistTokenModel.create({token})
    res.clearCookie('token')
    res.status(200).json({message:'Logged Out'})
}