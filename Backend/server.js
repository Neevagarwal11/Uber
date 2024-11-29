const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000
const server = http.createServer(app)





//SERVER CALL
server.listen(port, (err) => {
    if (err) {
        console.error(`Failed to start server: ${err.message}`);
    } else {
        console.log(`Server running on port ${port}`);
    }
});

server.on('error', (error) => {
    console.error('Server encountered an error:', error);
});
