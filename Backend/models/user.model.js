const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
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
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model('User',userSchema)

module.exports = userModel