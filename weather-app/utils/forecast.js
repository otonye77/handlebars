const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=bc949ab761031ce6f931cfc97b8d5cfc&query=${latitude},${longitude}`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `it is current ${response.body.current.temperature} degree and it feels like 5 degree`
      );
    }
  });
};

module.exports = forecast;
