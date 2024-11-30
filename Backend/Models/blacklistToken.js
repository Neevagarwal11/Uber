const mongoose = require('mongoose')

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique: true
    },
    createdAt:{     //used for logging out automatically after 24 hrs.
        type:Date,
        default:Date.now,
        expires:86400, //24 hrs
    }
})

module.exports = mongoose.model('BlacklistToken' , blacklistTokenSchema)