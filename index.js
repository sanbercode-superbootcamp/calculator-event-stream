const {
    multipleBy2
} = require("./lib/stream-transform");

const {
    Emitter,
    calculate
} = require('./lib/calculator')

let hasil = 0;
Emitter.on('calculateFinish', function (result) {
    multipleBy2(result);
});



calculate('add', 3, 3);
calculate('min', 3, 2);
calculate('multi', 2, 3);
calculate('div', 3, 3);