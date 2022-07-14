import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write('Before 1');
  res.write('Before 2');
  res.write('Before 3');

  let count = 0;

  const timer = setInterval(() => {
    count++;
    res.write(`Value is ${count}`);

    if (count >= 5) {
      clearTimeout(timer);
      res.end('Done!');
    }
  }, 1000);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Send a request to see how data is received
http.get(`http://localhost:${PORT}`, (res) => {
  res.setEncoding('utf8');
  res.on('data', console.log);
});
