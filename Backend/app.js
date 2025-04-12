const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express()
const connectToDB = require('./db/db')
const userRoutes = require('./routes/user.route')
const captainRoutes = require('./routes/captain.route')
const mapRoutes = require('./routes/maps.route')
const rideRoutes = require('./routes/ride.route')

connectToDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use('/user',userRoutes)
app.use('/captain',captainRoutes)
app.use('/maps',mapRoutes)
app.use('/ride',rideRoutes)



module.exports = app