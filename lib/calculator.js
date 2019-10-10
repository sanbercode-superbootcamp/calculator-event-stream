const EventEmitter = require('events');
const emitter = new EventEmitter();

function add (data) {
    emitter.emit('calculateFinish',data.a + data.b);
};
function sub (data) {
    emitter.emit('calculateFinish',data.a - data.b);
};
function mul (data) {
    emitter.emit('calculateFinish',data.a * data.b);
};
function div (data) {
    emitter.emit('calculateFinish',data.a / data.b);
};

emitter.on('add', add);
emitter.on('sub', sub);
emitter.on('mul', mul);
emitter.on('div', div);

function calculate(operation, a, b) {
    emitter.emit(operation, {a, b});
};

exports.calculate = calculate;
exports.emitter = emitter;
