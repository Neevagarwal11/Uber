const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000
const server = http.createServer(app)
const { initializeSocket } = require('./socket')
const path = require('path');
const express = require('express');


// const _dirname = path.resolve()
// app.use(express.static(path.join(_dirname , '/Frontend/dist')))
// app.get('*' , (req,res)=>{
//     res.sendFile(path.resolve(_dirname , 'Frontend' , 'dist' , 'index.html'))
// })

//SERVER CALL
server.listen(port, (err) => {
    if (err) {
        console.error(`Failed to start server: ${err.message}`);
    } else {
        console.log(`Server running on port ${port}`);
    }
});

initializeSocket(server)

server.on('error', (error) => {
    console.error('Server encountered an error:', error);
});
