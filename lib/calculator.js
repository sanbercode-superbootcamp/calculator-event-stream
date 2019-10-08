const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('plus', plus);
emitter.on('times', times);
emitter.on('minus', minus);
emitter.on('divide', divide);

function plus(data) {
  emitter.emit('operasiBeres', (data.a + data.b));
}

function times(data) {
  emitter.emit('operasiBeres', (data.a * data.b));
}

function minus(data) {
  emitter.emit('operasiBeres', (data.a - data.b));
}

function divide(data) {
  emitter.emit('operasiBeres', (data.a / data.b));
}

function calculate(operation, a, b) {
  emitter.emit(operation, {a, b});
}

exports.calculate = calculate;
exports.emitter = emitter;
