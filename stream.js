const { calculate, emitter } = require('./calculator');
const { Writable, Transform } = require('stream');
const fs = require('fs');

const output = fs.createWriteStream('output.txt');

const doublingValue = new Transform({
    transform(chunk, encoding, callback){
        let result = chunk.toString();
        result = parseInt(result)*2;
        this.push(result+"\n");
        console.log(result);
        callback();
    }
});

const passToFile = function(input){
    return new Promise((resolve, reject) => {
        doublingValue.write(input.toString());
        doublingValue.pipe(process.stdout);
        doublingValue.pipe(output);
        resolve("Stream Success");
    });
}

exports.output = output;
exports.doublingValue = doublingValue;
exports.passToFile = passToFile;