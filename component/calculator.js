var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
const INVALID_PARAM = "Error Invalid Parameter";
const PARAM_NOT_A_NUMBER = "Error Input Should be A Number";

emitter.on('add', (data) => operation.add(data.a, data.b));
emitter.on('substract', (data) => operation.substract(data.a, data.b));
emitter.on('divide', (data) => operation.divide(data.a, data.b));
emitter.on('multiple', (data) => operation.multiple(data.a, data.b));


function calculate(operation, a, b) {
    emitter.emit(operation, { a, b });
}

const operation = {
    add: (a, b) => {
        if (!a || !b) {
            emitter.emit('add:response', { code: -1, data: INVALID_PARAM });
            return;
        } else if (typeof a != 'number' || typeof b != 'number') {
            emitter.emit('add:response', { code: -1, data: PARAM_NOT_A_NUMBER });
            return;
        }
        emitter.emit('add:response', { code: 1, data: (a + b) });

    },
    substract: (a, b) => {
        if (!a || !b) {
            emitter.emit('substract:response', { code: -1, data: INVALID_PARAM });
            return;
        } else if (typeof a != 'number' || typeof b != 'number') {
            emitter.emit('substract:response', { code: -1, data: PARAM_NOT_A_NUMBER });
            return;
        }
        emitter.emit('substract:response', { code: 1, data: (a - b) });
    },
    divide: (a, b) => {
        if (!a || !b) {
            emitter.emit('divide:response', { code: -1, data: INVALID_PARAM });
            return;
        } else if (typeof a != 'number' || typeof b != 'number') {
            emitter.emit('divide:response', { code: -1, data: PARAM_NOT_A_NUMBER });
            return;
        }
        emitter.emit('divide:response', { code: 1, data: (a / b) });
    },
    multiple: (a, b) => {
        if (!a || !b) {
            emitter.emit('multiple:response', { code: -1, data: INVALID_PARAM });
            return;
        } else if (typeof a != 'number' || typeof b != 'number') {
            emitter.emit('multiple:response', { code: -1, data: PARAM_NOT_A_NUMBER });
            return;
        }
        emitter.emit('multiple:response', { code: 1, data: (a * b) });
    }
}

module.exports.calculate = calculate;
exports.emitter = emitter;
module.exports.INVALID_PARAM = INVALID_PARAM;
module.exports.PARAM_NOT_A_NUMBER = PARAM_NOT_A_NUMBER;