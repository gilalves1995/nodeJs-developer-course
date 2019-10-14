// Single-threaded - only one thing can be executed at a time
// Non-blocking - waiting for a task to finish does not causes the execution to block (callbacks)


const request = require('request');
const geocode = require('./utils/geocode');

const url = 'https://api.darksky.net/forecast/9bf79a7dd4e3e589442f0f7f29ff283f/37.8267,-122.4233?units=si';

/*
request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service.');
    } else if (response.body.error) {
        console.log('Unable to find location.');
    } else {
        console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
    }
});
*/


geocode('Boston', (error, data) => {
    console.log(error);
    console.log(data);
});
