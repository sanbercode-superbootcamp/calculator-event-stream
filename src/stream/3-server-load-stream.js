const fs = require('fs');
const server = require('http').createServer();
const filepath = './assets/lorem.txt';

server.on('request', function(req, res) {
  const stream = fs.createReadStream(filepath);
  stream.pipe(res);
});

server.listen(8080);
