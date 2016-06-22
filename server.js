//
// /* version 1 */
// var http = require('http');
//
// http.createServer(function(request, response) {
//   response.writeHead(200);
//   response.write('hello, world!');
//   response.end();
//
// }).listen(3000);
//
// console.log('listening on port 3000');
//

/* version 2 */
var http = require('http');
var title = 'Hello, world';
var html = `
<html>
<head>
<title>${title}</title>
<link href="styles.css" rel="stylesheet">
<script src="script.js"></script>
</head>
<body>
<h1>${title}</h1>
<h2>goodbye, world</h2>
<p>I am a node.js server and i can send back a web page</p>
<p>new changes</p>
</body>
</html>
`;

var css = `
body {
  background-color: yellow;
}
`;

var javascript = `
  alert('hello world!');
`;

var server = http.createServer(function(request, response) {
  console.log('path: ' + request.url);
  response.write(html);
  response.end();
});

//callback function is optional
server.listen(3000, function() {
  console.log('listening on port 3000');
});
