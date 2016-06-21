var request = require('request');

request('http://carolynsdaniel.surge.sh', function(err, response, body) {
  console.log(body);
});
