const socketIo = require('socket.io')
const userModel = require('./Models/userModel')
const captainModel = require('./Models/captainModel')
const cors = require('cors')

let io;


function initializeSocket(server){

    io= socketIo(server, {
        cors:{
            origin:'*',
            methods:[ 'GET' , 'POST'],
            Credential:true
        }
    });

    io.on('connection' , (socket)=>{
        console.log(`Client connected: ${socket.id}`);

        socket.on('join' , async(data)=>{
            const {userId , userType} = data
            // console.log(userId , userType)

            if(userType ==='user'){
                await userModel.findByIdAndUpdate(userId , {socketId: socket.id})
            }
            else if(userType === 'captain'){
                await captainModel.findByIdAndUpdate(userId , {socketId: socket.id})
            }
        })


        socket.on('disconnect' , ()=>{
            console.log(`Client disconnected: ${socket.id}`)
        })


        // LOCATION UPDATE
        socket.on('update-location-captain' , async (data)=>{
            const {userId  , location} =data;
            if(!location || !location.ltd || !location.lng){
                return socket.emit('error' , {message:"Invalid Location"})
            }
         
            
            const response = await captainModel.findByIdAndUpdate(userId , {
               $set:{ location:{
                ltd:location.ltd,
                lng:location.lng}
            }},
            {new:true  ,strict:false}
        );

        })
    })
}



function sendMessageToSocketId(socketId,messageObject){

    if(io){
        io.to(socketId).emit(messageObject.event, messageObject.data)
    }else{
        console.log('Socket.io not initialied')
    } 

}

module.exports = {initializeSocket , sendMessageToSocketId}