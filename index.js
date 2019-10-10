const fs = require('fs');
const { Transform } = require('stream');

const { calculate, emitter } = require('./lib/calculator');
const outStream = fs.createWriteStream('./outFile.txt');

emitter.on('add:response', function(res) {
    // console.log(res);
    multiTwo.write(res.toString());
});

emitter.on('min:response', function(res) {
    // console.log(res);
    multiTwo.write(res.toString());
});

emitter.on('multi:response', function(res) {
    // console.log(res);
    multiTwo.write(res.toString());
});

emitter.on('div:response', function(res) {
    // console.log(res);
    multiTwo.write(res.toString());
});

const multiTwo = new Transform({
    transform(chunk, encoding, callback) {
        result = parseInt(chunk) * 2;
        this.push(result.toString()+'\n');
        callback();
    }
})

calculate('add', 6, 2);
calculate('min', 6, 2);
calculate('multi', 6, 2);
calculate('div', 6, 2);

multiTwo.pipe(outStream);