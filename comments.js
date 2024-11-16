// Create web server
const http = require('http');
const fs = require('fs');

// Create web server
const server = http.createServer((req, res) => {
  console.log('Request was made: ' + req.url);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const readStream = fs.createReadStream('./views/index.html');
  readStream.pipe(res);
});

server.listen(3000, 'localhost');
console.log('Now listening to port 3000');