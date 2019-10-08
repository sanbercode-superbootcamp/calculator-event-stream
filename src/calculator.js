const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('plus', plus )
emitter.on('minus', minus )
emitter.on('kali', kali )
emitter.on('bagi', bagi )


function plus(data){
    let result = data.a + data.b
    calculateFinish(result)
}

function minus(data){
    let result = data.a - data.b
    calculateFinish(result)
}

function kali(data){
    let result = data.a * data.b
    calculateFinish(result)
}

function bagi(data){
    let result = data.a / data.b
    calculateFinish(result)
}

function calculateFinish(result){
    emitter.emit('calculateFinish', result)
}

function calculate(operation, a, b){
    emitter.emit(operation, {a, b})
}


module.exports.calculate = calculate
module.exports.emitter = emitter