var fs = require('fs');
//get filename from command line arguments
var filename = process.argv[2];

fs.readFile(filename, function(err, buffer) {
  if (err) {
    console.error(err.stack);
    return;
  }
  var contents = buffer.toString();
  var characters = contents.length;
  var lines = contents.split('\n');

  console.log('characters: ' + contents.length);
  console.log('lines: ' + lines.length);
});
