// Single-threaded - only one thing can be executed at a time
// Non-blocking - waiting for a task to finish does not causes the execution to block (callbacks)

const request = require('request');

const url = 'https://api.darksky.net/forecast/9bf79a7dd4e3e589442f0f7f29ff283f/37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});