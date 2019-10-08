const { calculate, calcEmitter } = require('./lib/calculator');

let res;
calcEmitter.on('calculate', (result) => res = result);
calculate('divide', 14, 7);
// calculate('substract', 5, 6);
console.log(res);