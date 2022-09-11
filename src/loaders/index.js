module.exports.init = () => {

    require('./webserver').init()
    require('./websocket').init()

}