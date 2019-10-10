var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('add', (data) => add(data.a, data.b));
emitter.on('min', (data) => min(data.a, data.b));
emitter.on('multi', (data) => multi(data.a, data.b));
emitter.on('div', (data) => div(data.a, data.b));

function calculate(operation, a, b) {
    emitter.emit(operation, { a, b });
}

function add(a, b) {
    if(!a || !b) {
        emitter.emit('add:response', Error(ERROR_MSG));
        return;
    }
    const c = a + b;
    emitter.emit('add:response', c);
}

function min(a, b, callback) {
    if(!a || !b) {
        emitter.emit('min:response', Error(ERROR_MSG));
        return;
    }
    const c = a - b;
    emitter.emit('min:response', c);
}

function multi(a, b, callback) {
    if(!a || !b) {
        emitter.emit('multi:response', Error(ERROR_MSG));
        return;
    }
    const c = a * b;
    emitter.emit('multi:response', c);
}

function div(a, b, callback) {
    if(!a || !b) {
        emitter.emit('div:response', Error(ERROR_MSG));
        return;
    }
    const c = a / b;
    emitter.emit('div:response', c);
}

module.exports.calculate = calculate;
exports.emitter = emitter;