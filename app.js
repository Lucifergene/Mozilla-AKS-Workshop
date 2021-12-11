const http = require('http');
const date = require('date-and-time');

const port = process.env.PORT || 3000;

const now = new Date();
const dateString = date.format(now, 'ddd, MMM DD YYYY');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = '<h1>Hello Everyone!</h1><br><h2>It is ' + dateString + '</h2>';
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
