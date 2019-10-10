const fs = require('fs');
const server = require('http').createServer();
const filepath = './assets/lorem.txt';

server.on('request', function(req, res) {
  fs.readFile(filepath, function(err, data) {
    if (err) throw err;

    res.end(data);
  });
});

server.listen(8080);