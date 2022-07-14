var http = require("http");
// var url = require("url");

http
  .createServer(function (req, res) {
    /* var query = url.parse(req.url, true).query;
     res.end('GET params: ' + JSON.stringify(query)); */ // DEPRECATED!!!!!
    const normalizedURL = new URL(req.url, `http://${req.headers.host}`);
    //приклад запиту http://localhost:8080/?age=10&sex=m&name=alex
    console.log(req.url); // /?age=10&sex=m&name=alex
    console.log(normalizedURL); // --->
    /* 
    URL {
      href: 'http://localhost:8080/?age=10&sex=m&name=alex',
      origin: 'http://localhost:8080',
      protocol: 'http:',
      username: '',
      password: '',
      host: 'localhost:8080',
      hostname: 'localhost',
      port: '8080',
      pathname: '/',
      search: '?age=10&sex=m&name=alex',
      searchParams: URLSearchParams { 'age' => '10', 'sex' => 'm', 'name' => 'alex' },
      hash: ''
    }*/
    console.log(normalizedURL.searchParams); // ---->
    //URLSearchParams { 'age' => '10', 'sex' => 'm', 'name' => 'alex' }
    console.log(normalizedURL.searchParams.get('age')); // 10
    console.log(normalizedURL.searchParams.getAll('age')); // [10]
    const params = Object.fromEntries(normalizedURL.searchParams.entries());
    console.log(params); // { age: '10', sex: 'm', name: 'alex' } АЛЕ якщо в запиті декілька однакових параметрів, то в об єкті буде лише останній з однакових! 
  })
  .listen(8080, function () {
    console.log("Server running on port 8080");
  });
