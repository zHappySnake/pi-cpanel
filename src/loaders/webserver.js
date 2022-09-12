const express = require('express');
const session = require('express-session');
const http = require('http')
const path = require('path')

const config = require('../../config.json')

const app = express();
const server = http.createServer(app);

function init() {

    app.use(session({
        secret: config.session.secret,
        resave: true,
        saveUninitialized: true
    }))

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static(path.join(__dirname, '../public/static/')))
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/index.html'))
    })

    server.listen(config.port)
    console.log("Listening at http://localhost:" + config.port)

}

module.exports = { init, server }