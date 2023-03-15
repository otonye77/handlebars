const geocode = require("../weather-app/utils/geocode");
const forecast = require("../weather-app/utils/forecast");

const address = process.argv[2];

if (!address) {
  return console.log("Provide an address");
}

console.log(
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }
    console.log(
      forecast(data.latitude, data.longitude, (error, forecastdata) => {
        if (error) {
          return console.log(error);
        }
        console.log(forecastdata);
      })
    );
  })
);
