const EventEmitter = require('events');
const emitter = new EventEmitter();

function plus({ a, b }) {
  emitter.emit('calculated', a + b);
}

function calculate(operation, a, b) {
  emitter.emit(operation, { a, b });
}

emitter.on('plus', plus);

exports.calculate = calculate;
exports.emitter = emitter;
