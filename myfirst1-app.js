const http  = require('http');
const hostname = '127.0.0.1';
const port = 5000;
var dt = require('./myFirstModule');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("The date and time are currently : " +dt.myDateTime());
    res.end();
  
  });
  
  server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);


  })


  