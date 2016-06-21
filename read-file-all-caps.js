
//convert file to uppercase
var fs = require('fs'); //core module from node.js

var buffer = fs.readFileSync('hello.txt'); //prints out binary data
console.log('Buffer: ', buffer);

var contents = buffer.toString().toUpperCase(); //change to string
console.log('Contents: ' + contents);
