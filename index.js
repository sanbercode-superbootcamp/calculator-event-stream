const EventEmitter = require('events')
const fs = require('fs')
const emitter = new EventEmitter()

emitter.on('plus', plus)
emitter.on('minus', minus)
emitter.on('multi', multi)
emitter.on('div', div)

const emitData = {
    plus: '',
    minus: '',
    multi: '',
    div: '',
}

function plus(data) {
    emitData.plus = data.a + data.b
    emitter.emit('calPlus', data.a + data.b)
}

function minus(data) {
  emitData.minus = data.a - data.b
  emitter.emit('calMinus', data.a - data.b)
}

function multi(data) {
  emitData.multi = data.a * data.b
  emitter.emit('calMulti', data.a * data.b)
}

function div(data) {
  emitData.div = data.a / data.b
  emitter.emit('calDiv', data.a / data.b)
}

function calculate(operation, a, b) {
    emitter.emit(operation, { a, b })
}

calculate('plus', 5, 5)
calculate('minus', 5, 5)
calculate('multi', 5, 5)
calculate('div', 5, 5)

const source = fs.createWriteStream('output.txt')
source.write(String(emitData.plus * 2) + '\n');
source.write(String(emitData.minus * 2) + '\n');
source.write(String(emitData.multi * 2) + '\n');
source.write(String(emitData.div * 2) + '\n');
source.end();

exports.emitter = emitter
exports.calculate = calculate
