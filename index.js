const { calculate, emitter } = require('./lib/calculator');
const { Transform, Readable } = require('stream');
const { timesBy2 } = require('./lib/transformMultiplier');

let hasil;

emitter.on('operasiBeres', function(hasil) {
  timesBy2(hasil);
  console.log('hasil operasi : ' + hasil);
});

calculate('plus', 4, 2);
calculate('times', 4, 2);
calculate('minus', 4, 2);
calculate('divide', 4, 2);
