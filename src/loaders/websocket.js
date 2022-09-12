const { Server } = require('socket.io')
const server = require('./webserver').server

const { getCpu, getMemory, getTemp } = require('../helpers/sysstats')

const io = new Server(server)

var connectedClients = 0

module.exports.init = () => {

    io.on('connection', async(socket) => {

        connectedClients++;
        console.log(`Client connected (${connectedClients})`)

        socket.on('disconnect', () => {

            connectedClients--;
            console.log(`Client disconnected (${connectedClients})`)

        })

        setInterval(async () => {
            var cpu = await getCpu()
            var mem = await getMemory()
            var temp = await getTemp()
        
            socket.emit("cpu", cpu)
            socket.emit("memory", mem)
            socket.emit("temperature", temp)
        
        }, 500);

    })
}