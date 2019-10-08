const { calculate, emitter } = require('./calculator')
const { output, doublingValue, passToFile } = require('./stream');

emitter.on('calculateFinish', function(result) {
    passToFile(result);
});

calculate('plus', 5,5);
calculate('minus', 5,5);
calculate('multiply', 5,5);
calculate('divide', 5,5);