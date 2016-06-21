var request = require('request');

var city = process.argv[2];

request({
  url: 'http://api.openweathermap.org/data/2.5/weather',
  qs: {
    q: city,
    units: 'imperial',
    APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
  }
}, function(err, response, body) {
  var data = JSON.parse(body);
  console.log('weather: ' + data.weather[0].description);
  console.log('Temperature: ' + data.main.temp + '°');
});
