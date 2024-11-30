const mongoose = require('mongoose')
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3, 'First name must atleast contain 3 or more characters.']
            
        },
        lastname:{
            type:String,
            minlength:[3, 'Last name must atleast contain 3 or more characters.']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,"Email must consit atleast 5 characters."]
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{      //Required for making live tracking
        type:String,
    },
})

userSchema.methods.generateAuthToken =  function(){
    const token  = jwt.sign({_id:this._id} , process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async(password)=>{
    return await bcrypt.compare(password , this.password)
}
userSchema.statics.hashPassword = async (password)=>{
    return await bcrypt.hash(password ,10)
}

const userModel = mongoose.model('user' , userSchema)

module.exports= userModel