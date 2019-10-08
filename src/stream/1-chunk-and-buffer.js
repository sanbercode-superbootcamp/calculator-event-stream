const fs = require('fs');

const filepath = './assets/lorem.txt';
const readStream = fs.createReadStream(filepath);

readStream.on('data', function (chunk) {
  console.log('Reading Chunk...');
  console.log(chunk.toString().length);
});
