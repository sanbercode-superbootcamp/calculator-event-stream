const fs = require('fs');

const source = fs.createReadStream('./assets/lorem.txt');

// Try to hide and unhide this pause function
source.pause(); // change the readable stream from flowing mode to paused mode

source.on('data', function (chunk) {
  console.log(chunk);
});

source.on('end', function () {
  console.log('End of Stream');
});

source.on('error', function() {
  console.log('Error occured');
});
