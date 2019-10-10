const fs = require('fs');

const destination = fs.createWriteStream('test.tx');

let ok = true;
for (let i = 0; i < 10000000; i++) {
  ok = destination.write('Hahahaha');
  if (!ok) {
    console.log('IM FULL!');
    break;
  }
}

destination.on('drain', function() { // The buffer is already drained and ready to be written again
  console.log('IM HUNGRY AGAIN!');
  destination.write('Last');
});

destination.on('finish', function() {
  console.log('finish');
});

destination.end();

