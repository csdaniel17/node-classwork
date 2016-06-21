var fs = require('fs');
// var contents = 'Here is some text to save';
var contents = 'new text to save';
var filename = 'newfile.txt';

fs.writeFile(filename, contents, function(err) {
  //check for error
  if (err) {
    //print the stacktrace
    console.error(err.stack); //similar to console.log, but marks as an error
    return;
  }
  console.log('wrote ' + filename);
});
