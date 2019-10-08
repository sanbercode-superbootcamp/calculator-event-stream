const EventEmitter = require('events');
const emitter = new EventEmitter();
const { calculate } = require('./calculator')

calculate('plus', 5,5);
calculate('minus', 5,5);
calculate('multiply', 5,5);
calculate('divide', 5,5);