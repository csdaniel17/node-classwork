var fs = require('fs');

fs.readFile('newfile2.txt', function(err, buffer) {
  if (err) {
    console.error(err.stack);
  }
  var contents = ('hello, world!').toUpperCase();
  var filename = 'newfile2.txt';
  fs.writeFile(filename, contents, function(err) {
    if (err) {
      console.error(err.stack);
      return;
    }
    console.log('wrote: ' + filename);
  });
  console.log('contents: ' + contents);
});
