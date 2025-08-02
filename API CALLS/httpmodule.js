// const http = require('http');

// http.createServer((req,res)=>{
//     res.write('Hello World! This is a simple HTTP server.');
//     res.end(); // End the response
// }).listen(3000);
// console.log('Server is running on http://localhost:3000');
// // This code creates a simple HTTP server using Node.js's built-in 'http' module.

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true); // Parse the URL
  const query = parsedURL.query; // Get query data like ?flavor=lemon
  const flavor = query.flavor;

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (flavor) {
    res.write(`🫖 Here is your ${flavor} tea!`);
  } else {
    res.write('🧋 Please choose a flavor, like ?flavor=milk');
  }

  res.end();
}).listen(3000, () => {
  console.log('Tea Server: http://localhost:3000');
});