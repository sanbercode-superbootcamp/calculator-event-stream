const { calculate, emitter } = require('./lib/calculator');
const { mulByTwo,output } = require('./stream/transform');
const { Transform } = require('stream');
const fs = require('fs');

emitter.on('calculateFinish', function(result) {
    mulByTwo.write(result.toString());
});

mulByTwo.pipe(output);

calculate('add', 3, 2);
calculate('sub', 3, 2);
calculate('mul', 3, 2);
calculate('div', 3, 2);
// let res;
// emitter.on('calculateFinish', (result) => res = result);
// calculate('add',2 ,2);
// console.log(res);
