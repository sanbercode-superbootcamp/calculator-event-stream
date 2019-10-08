const { calculate, emitter } = require('./calculator')
const { output, doublingValue } = require('./stream');

emitter.on('calculateFinish', function(result) {
    doublingValue.write(result.toString());
});

doublingValue.pipe(output);

calculate('plus', 5,5);
calculate('minus', 5,5);
calculate('multiply', 5,5);
calculate('divide', 5,5);