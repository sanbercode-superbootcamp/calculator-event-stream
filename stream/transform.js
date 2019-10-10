const { Transform } = require('stream');
const fs = require('fs');

const output = fs.createWriteStream('output.txt');

const mulByTwo = new Transform({
  transform(chunk, encoding, callback) {
    let result = chunk.toString();
    result = parseInt(result) * 2;
    this.push('-> ' + result.toString() + '\n');
    callback();
    //console.log(result);
  }
});

exports.output = output;
exports.mulByTwo = mulByTwo;