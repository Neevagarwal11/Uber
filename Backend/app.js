const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDB = require('./DB/db')
const cookieParser = require('cookie-parser')
const userRoutes = require('./Routes/userRoutes')
const captainRoutes = require('./Routes/captainRoutes')
const mapRoutes = require('./Routes/mapsRoute')
const rideRoutes = require('./Routes/rideRoutes')
connectToDB()
 
app.use(cors({
    origin: ['http://localhost:5173', 'https://05xn1502-5173.inc1.devtunnels.ms'], // Add allowed origins here
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow credentials (cookies)
    allowedHeaders: ['Content-Type', 'token'], // Add headers used by your requests

}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get('/' , (req,res)=>{
    res.send('Hello World')
})
app.use('/users' , userRoutes)
app.use('/captain' , captainRoutes)
app.use('/maps' , mapRoutes)
app.use('/rides' , rideRoutes)


module.exports =app