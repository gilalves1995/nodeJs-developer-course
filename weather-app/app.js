// Single-threaded - only one thing can be executed at a time
// Non-blocking - waiting for a task to finish does not causes the execution to block (callbacks)

const request = require('request');

const url = 'https://api.darksky.net/forecast/9bf79a7dd4e3e589442f0f7f29ff283f/37.8267,-122.4233?units=si';
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2ctYWx2ZXMiLCJhIjoiY2sxcWt1NWg3MTU4cDNjbzY4ZGhuNzlhaCJ9.ECEBGmfVNUzZedFGWvDuKQ&limit=1';

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


request({ url: geocodeUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to geocoding service.');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find the location.');
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }
});
