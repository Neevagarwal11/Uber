const userModel = require('../Models/userModel')


module.exports.createUser = async ({        //This is function whose work is just to check if the required data is been received it creates a user in the DB and returns the value of users 
    firstname,lastname,email,password
}) =>{
    if(!firstname || !lastname || !email || !password){
        throw new Error('All field are required')
    }

    const user = userModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
    })

    return user;
} 