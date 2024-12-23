const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDB = require('./DB/db')
const userRoutes = require('./Routes/userRoutes')
const captainRoutes = require('./Routes/captainRoutes')
const mapRoutes = require('./Routes/mapsRoute')
const rideRoutes = require('./Routes/rideRoutes')
connectToDB()
 
app.use(cookieParser())
app.use(cors({
    origin: ['*'], // Add allowed origins here    
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow cookies to be sent
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/' , (req,res)=>{
    res.send('Hello World')
})
app.use('/users' , userRoutes)
app.use('/captain' , captainRoutes)
app.use('/maps' , mapRoutes)
app.use('/rides' , rideRoutes)


module.exports =app
