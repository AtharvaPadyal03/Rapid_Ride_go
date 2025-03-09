const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'Firstname must be at least 3 characters long']
        },
        lastname:{
            type:String,
            minlength:[3,'Firstname must be at least 3 characters long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        minlength:[6,'email must be at least 6 characters long']
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String,
        default:''
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehical:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be at least 3 character long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate must be at least 3 character long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[2,'Capacity must be atleast 2']
        },
        vehicalType:{
            type:String,
            required:true,
            enum:['car','moto','auto']
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    console.log('in Auth token')
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token
}

captainSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

const captainModel = mongoose.model('captain',captainSchema)

module.exports = captainModel

