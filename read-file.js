
//reading a file - sync
var fs = require('fs'); //core module from node.js

var filename = process.argv[2];

var buffer = fs.readFileSync(filename); //prints out binary data
console.log('Buffer: ', buffer);

var contents = buffer.toString(); //change to string
console.log('Contents: ' + contents);


//reading a file async
var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, function(err, buffer) {
  if (err) {
    console.log('error: ', err); //if null - it works
    return; //if there is an error, do not proceed
  }
  var contents = buffer.toString();
  console.log('contents: ' + contents);
});

// console.log('this happened before data was ready.');
