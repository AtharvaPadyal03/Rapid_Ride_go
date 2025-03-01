const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const blacklistTokenModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')

module.exports.authUser = async(req,res,next)=>{
    
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1]

    if(!token){
        return res.status(401).json({message:"Unauthorized User"})
    }

    const isblacklisted  = await blacklistTokenModel.findOne({token:token})

    if(isblacklisted){
        return res.status(401).json({message:"Unauthorized Access"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)
        req.user =user
        return next()
    } catch (error) {
        return res.status(401).json({message:'Unauthorized User'})
    }
}

module.exports.authCaptain = async(req,res,next)=>{
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1]

    if(!token){
        return res.status(401).json({message:"Unauthorized User"})
    }

    const isblacklisted  = await blacklistTokenModel.findOne({token:token})

    if(isblacklisted){
        return res.status(401).json({message:"Unauthorized Access"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const captain  = await captainModel.findById(decoded._id)
        req.captain =captain
        return next()
    } catch (error) {
        return res.status(401).json({message:'Unauthorized User'})
    }
}