var fs = require('fs');
var request = require('request');

var url = process.argv[2];
var filename = process.argv[3];

request(url, function(err, response, body) {
  if (err) {
    console.log(err);
    return;
  }
  fs.writeFile(filename, body, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('wrote: ' + filename);
    console.log('contents: ' + body);
  });
});
