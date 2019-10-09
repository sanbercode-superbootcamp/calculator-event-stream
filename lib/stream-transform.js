const {
    Transform
} = require('stream');

const fs = require('fs');

const output = fs.createWriteStream('output.txt');
const readStream = fs.createReadStream('output.txt');

const multipleBy2 = function (input) {
    let transformStream = new Transform({
        readableObjectMode: true,
        writableObjectMode: true,
        transform(chunk, encoding, callback) {
            let str = chunk.toString();
            let num = parseInt(str);
            let result = num * 2;
            this.push(result.toString() + "\n");
            callback();
        }
    });

    transformStream.write(input.toString());
    transformStream.pipe(output);
}

exports.multipleBy2 = multipleBy2;
exports.readStream = readStream;