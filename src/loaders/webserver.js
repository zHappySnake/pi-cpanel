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
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/index.html'))
    })

    server.listen(3000)
    console.log("Listening at http://localhost:" + 3000)

}

module.exports = { init, server }