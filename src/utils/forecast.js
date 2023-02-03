const request  = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=fe00352f7a52f1c39b952f85cfb35902&query=${latitude},${longitude}`;
    request({ url, json: true }, (error, { body }) => {
      if (error) {
          callback('Unable to connect to weather service!', undefined);
      } else if (body.error) {
          callback('Unable to find location', undefined)
      } else {
        callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like  ${body.current.feelslike}% degress out`)
      }
    })
    
}

module.exports = forecast;


