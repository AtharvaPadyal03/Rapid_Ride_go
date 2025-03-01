const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express()
const connectToDB = require('./db/db')
const userRoutes = require('./routes/user.route')

connectToDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use('/user',userRoutes)



module.exports = app