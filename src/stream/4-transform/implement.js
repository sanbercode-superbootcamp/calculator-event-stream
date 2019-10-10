/**
 * How to Use
 * 
 * Run the code.
 * Enter a any string in input. Example: hi there
 * Then press enter, the output will be displayed in the console.
 * The output will be UpperCase of the input: Example: HI THERE
 * 
 */

const { Transform } = require('stream');

const stream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(stream).pipe(process.stdout);