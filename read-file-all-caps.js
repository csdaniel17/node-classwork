
//convert file to uppercase
var fs = require('fs'); //core module from node.js

fs.readFile('hello.txt', function(err, buffer) {
  if (err) {
    console.log('Error: ', err);
    return;
  }
  var contents = buffer.toString().toUpperCase(); //change to string
  console.log('Contents: ' + contents);
});
