const fs = require('fs');
const { Transform } = require('stream');

let writeRes = fs.createWriteStream('output.txt');

const timesBy2 = function(input) {
  let instanceTransform = new Transform({
    transform(chunk, encoding, callback) {
      let string = chunk.toString();
      let int = parseInt(string) * 2;
      this.push(int.toString() + "\n");
      this.pipe(writeRes);
      callback();
    }
  });
  instanceTransform.write(input.toString());
}

exports.timesBy2 = timesBy2;
