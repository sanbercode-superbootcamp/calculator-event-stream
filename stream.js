const { calculate, emitter } = require('./calculator');
const { Writable, Transform } = require('stream');
const fs = require('fs');

const output = fs.createWriteStream('output.txt');

const doublingValue = new Transform({
    transform(chunk, encoding, callback){
        let result = chunk.toString();
        result = parseInt(result)*2;
        this.push(result+"\n");
        callback();
    }
});

exports.output = output;
exports.doublingValue = doublingValue;