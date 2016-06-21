var request = require('request');

var city = process.argv[2];

getWeather(city, function(err, data) {
  if (err) {
    console.log('get weather failed: ' + err.stack);
    return;
  }

  console.log('weather: ' + data.weather[0].description);
  console.log('Temperature: ' + data.main.temp + '°');
});

/*
getWeather function

inputs:
  *city - name of city
  *callback - continuation to be called when data arrives
    *inputs:
      *err - null if success, error obj if not
      *data - weather data
*/

function getWeather(city, callback) {
  request({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: city,
      units: 'imperial',
      APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
    }
  }, function(err, response, body) {
    if (err) {
      callback(err);
      return;
    }
    var data = JSON.parse(body);
    callback(null, data);
    // try {
    //   var data = JSON.parse(body);
    // } catch (parseError) {
    //   callback(parseError);
    //   return;
    // }

  });
}
