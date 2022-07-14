// configure a request
const req = http.request('http://localhost:3000', (res) => {
  res.setEncoding('utf8');

  // subscribes on receiving a portion of response data
  res.on('data', (data) => {
    // process a portion of a response data here
    console.log(data);
  });
});

// subscribes on any request error
req.on('error', (error) => {
  // handle an error here
  console.log(error);
});

// sends the request
req.end();

//!You can use an object instead of string URL

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET'
};

const request = http.request(options, (res) => {});

req.end();

//!Simplified http.get
//It does not need a req.end()

const request1 = http.get(`http://localhost:${PORT}`, (res) => {
  res.setEncoding('utf8');
  res.on('data', console.log);
});

req.on('error', console.warn);
