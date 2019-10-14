const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/9bf79a7dd4e3e589442f0f7f29ff283f/${latitude},${longitude}?units=si`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if(response.body.error) {
            callback('Unable to find provided location.', undefined);
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;