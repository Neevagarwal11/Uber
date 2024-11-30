const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDB = require('./DB/db')
const userRoutes = require('./Routes/userRoutes')

connectToDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/' , (req,res)=>{
    res.send('Hello World')
})
app.use('/users' , userRoutes)

module.exports =app