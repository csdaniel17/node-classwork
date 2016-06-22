var request = require('request');
// var timestamp = require('./timestamp');
var async = require('async');

var cities = [
  'Atlanta, GA',
  'Phoenix, AZ',
  'Dallas, TX',
  'Philadelphia, PA'
];

/* version 1
cities.forEach(function(city) {
  getWeather(city, function(err, data) {
    console.log(data.name + ' temp: ' + data.main.temp + '°');
  });
});
*/

/* version 2 */
async.map(cities, getWeather, function(err, results) {
  var temps = results.map(function(result) {
    return result.main.temp;
  });

  var max = 0;
  for (var i = 0; i < temps.length; i++) {
    var temp = temps[i];
    if (temp > max) {
      max = temp;
    }
  }

  console.log('max temp is: ' + max);

  console.log('the temps are: ' + temps);
  console.log('max temp is: ' + maxTemp(results));
  console.log('max temp is: ' + maxTemp2(temps));
});

function maxTemp(results) {
  var max = results[0].main.temp;
  var city;
  for (var i = 0; i < results.length; i++) {
    if (results[i].main.temp > max) {
      max = results[i].main.temp;
      city = results[i].name;
    }
  }
  return (city + ' is the hottest city with a temp of ' + max);
}

function maxTemp2(temps) {
  return Math.max.apply(null, temps);
}

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
  });
}
