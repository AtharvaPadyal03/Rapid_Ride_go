const captainModel = require('../models/captain.model')


module.exports.createCaptain = async({firstname,
    lastname,
    email,
    password,
    color,
    plate,
    capacity,
    vehicalType
})=>{
    if(!firstname || !email || !password || !color || !plate|| !capacity || !vehicalType){
        throw new Error('All fields are required')
    }
    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehical:{
            color,
            plate,
            capacity,
            vehicalType
        }
    })

    return captain
}