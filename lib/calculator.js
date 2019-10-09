const EventEmitter = require('events');
const Emitter = new EventEmitter();

const ERR_MSG = {
    INVALID_ARGS_TYPE: "arguments type is invalid",
    INVALID_EVENT_TYPE: "event name is invalid"
}

Emitter.on('add', additionEvent);
Emitter.on('min', subtractionEvent);
Emitter.on('multi', multiplicationEvent);
Emitter.on('div', divisionEvent);

function additionEvent(data) {
    const sum = data.a + data.b;
    Emitter.emit('calculateFinish', sum);
}


function subtractionEvent(data) {
    const min = data.a - data.b;
    Emitter.emit('calculateFinish', min);
}

function multiplicationEvent(data) {
    const multi = data.a * data.b;
    Emitter.emit('calculateFinish', multi);
}

function divisionEvent(data) {
    const div = data.a / data.b;
    Emitter.emit('calculateFinish', div);
}

function calculate(operation, a, b) {
    Emitter.emit(operation, {
        a,
        b
    });
}


exports.calculate = calculate;
exports.Emitter = Emitter;