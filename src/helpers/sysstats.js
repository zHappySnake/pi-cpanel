const fs = require('fs')
const os = require('os')
const osu = require('node-os-utils')

module.exports.getTemp = async () => {

    var temp = await fs.readFileSync('/sys/class/thermal/thermal_zone0/temp')
    var temp_c = temp / 1000

    var result = Math.round(temp_c * 100) / 100

    return result
}

module.exports.getMemory = async () => {

    var totalmem = await os.totalmem / 1000000
    var freemem = await os.freemem / 1000000
    var usedmem = await totalmem - freemem

    var result = await JSON.stringify({
        total: Math.round(totalmem * 100) / 100,
        used: Math.round(usedmem * 100) / 100,
        free: Math.round(freemem * 100) / 100
    })

    return result
}

module.exports.getCpu = async () => {

    var cpu = 100 - await osu.cpu.free()
    var result = await Math.round(cpu * 100) / 100
    
    return result

}