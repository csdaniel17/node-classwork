var fs = require('fs');

var contents = fs.readFileSync('hello.txt');
console.log('Contents: ' + contents);
