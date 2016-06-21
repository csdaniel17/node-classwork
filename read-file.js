
//reading a file - sync
var fs = require('fs'); //core module from node.js

var buffer = fs.readFileSync('hello.txt'); //prints out binary data
console.log('Buffer: ', buffer);

var contents = buffer.toString(); //change to string
console.log('Contents: ' + contents);


//reading a file async
var fs = require('fs');

fs.readFile('hello.txt', function(err, buffer) {
  console.log('error: ', err); //if null - it works
  console.log('got data: ', buffer);
});

console.log('this happened before data was ready.');
