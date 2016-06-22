var http = require('http');
var request = require('request');

function getHTML(data) {
  var html = `
  <html>
  <head>
  <meta charset='utf8'>
  <title>${data.name}</title>
  </head>
  <body>
  <h1>${data.name}</h1>
  <p>
    Temperature: ${data.main.temp}°<br>
    Weather: ${data.weather[0].description}
  </p>
  </body>
  </html>
  `;
  return html;
}

function getErrorPageHTML(city, err) {
  return `
  <h1>no weather info for ${city}</h1>
  <p>${err.message}</p>
  `;
}

var server = http.createServer(function(request, response) {
  var url = request.url;
  var city = url.substring(1);

  console.log('city', city);
  getWeather(city, function(err, data) {
    var html;
    if (err) {
      console.log('error');
      html = getErrorPageHTML(city, err);
      response.write(html);
    } else {
      console.log('no error');
      html = getHTML(data);
      response.write(html);
    }
    response.end();
  });
});

//callback function is optional
server.listen(3000, function() {
  console.log('listening on port 3000');
});

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
    if (data.cod === '404') {
      callback(new Error('no weather info'));
      console.log('data');
      return;
    }
    callback(null, data);
  });
}
