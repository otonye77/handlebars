const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoib3RvbnllNyIsImEiOiJja3B2aGMybm0xM2J2MnZub3Z5d3FwMWxvIn0.Uf-guXvkQx5Yf4Teh2IA4w`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location please try another search", undefined);
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];
      callback(undefined, {
        latitude,
        longitude,
      });
    }
  });
};

module.exports = geocode;
