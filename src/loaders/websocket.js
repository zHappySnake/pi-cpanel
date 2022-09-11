const { Server } = require('socket.io')
const server = require('./webserver').server

const io = new Server(server)

var connectedClients = 0;
module.exports.init = () => {

    io.on('connection', async(socket) => {

        connectedClients++;
        console.log(`Client connected (${connectedClients})`)

        socket.on('disconnect', () => {

            connectedClients--;
            console.log(`Client disconnected (${connectedClients})`)

        })

    })

}