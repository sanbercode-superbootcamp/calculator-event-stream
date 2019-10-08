const EventEmitter = require('events');
const calcEmitter = new EventEmitter();

const ERR_MSG = ['a & b is mandatory', 'parameters should be integer', 'can\'t divide by 0'];

var calculator = {
  add: function(data) {
    calcEmitter.emit('calculate', data.a + data.b);
  },
  substract: function(data) {
    calcEmitter.emit('calculate', data.a - data.b);
  },
  multiply: function(data) {
    calcEmitter.emit('calculate', data.a * data.b);
  },
  divide: function(data) {
    if (data.b === 0) {
      calcEmitter.emit('calculate', new Error(ERR_MSG[2]));
      return;
    }
    calcEmitter.emit('calculate', data.a / data.b);
  }
}

calcEmitter.on('add', calculator.add);
calcEmitter.on('substract', calculator.substract);
calcEmitter.on('multiply', calculator.multiply);
calcEmitter.on('divide', calculator.divide);

function calculate(operation, a, b) {
  if (a == null || b == null) {
    calcEmitter.emit('calculate', new Error(ERR_MSG[0]));
    return;
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    calcEmitter.emit('calculate', new Error(ERR_MSG[1]));
    return;
  }
  calcEmitter.emit(operation, {a, b});
}

exports.ERR_MSG = ERR_MSG;
exports.calculate = calculate;
exports.calcEmitter = calcEmitter;
