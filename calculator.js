const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('plus', plus);
emitter.on('minus', minus);
emitter.on('multiply', multiply);
emitter.on('divide', divide);

function plus(data) {
    console.log(data.a + data.b);
}

function minus(data) { 
    console.log(data.a - data.b);
}

function multiply(data) { 
    console.log(data.a * data.b);
}

function divide(data) { 
    console.log(data.a / data.b);
}

function calculate(operation, a, b) {
    emitter.emit(operation, {a,b});
}

exports.calculate = calculate;