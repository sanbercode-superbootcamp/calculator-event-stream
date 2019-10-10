const { Readable } = require('stream');

const inStream = new Readable({
  read() {
    this.push('First Data');
    this.push(null); // tell that the data of the stream is already finished | TRY: Try hide this and see what happens!
  }
});

inStream.pipe(process.stdout);
