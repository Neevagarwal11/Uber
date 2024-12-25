const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config()
const express = require('express')
const app = express()
const connectToDB = require('./DB/db')
const userRoutes = require('./Routes/userRoutes')
const captainRoutes = require('./Routes/captainRoutes')
const mapRoutes = require('./Routes/mapsRoute')
const rideRoutes = require('./Routes/rideRoutes')
const path  = require('path')
const cors = require('cors')
connectToDB()
 
app.use(cookieParser())
app.use(cors({
    origin:['https://uber-ho3a.onrender.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow cookies to be sent
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const _dirname = path.resolve()
app.use(express.static(path.join(_dirname , '/Frontend/dist')))
app.get('*' , (req,res)=>{
    res.sendFile(path.resolve(_dirname , 'Frontend' , 'dist' , 'index.html'))
})

app.get('/' , (req,res)=>{
    res.send('Hello World')
})
app.use('/users' , userRoutes)
app.use('/captain' , captainRoutes)
app.use('/maps' , mapRoutes)
app.use('/rides' , rideRoutes)


module.exports =app
