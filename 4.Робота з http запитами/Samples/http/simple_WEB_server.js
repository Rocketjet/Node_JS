import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Headers should be set before sending data
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  
  // sends a portion of data
  res.write('<h1>Hello, world!</h1>');
  res.write('next portion of data');
  res.write('one more portion of data');

  // finishes the response
  res.end('the last portion of data');
});

// Enables the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
