const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDB = require('./DB/db')
const cookieParser = require('cookie-parser')
const userRoutes = require('./Routes/userRoutes')
const captainRoutes = require('./Routes/captainRoutes')

connectToDB()
 
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    credentials: true, // Allow credentials (cookies)
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get('/' , (req,res)=>{
    res.send('Hello World')
})
app.use('/users' , userRoutes)
app.use('/captain' , captainRoutes)

module.exports =app