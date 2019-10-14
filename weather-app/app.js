// Single-threaded - only one thing can be executed at a time
// Non-blocking - waiting for a task to finish does not causes the execution to block (callbacks)

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];
if (!location) {
    return console.log("You must provide a location.");
}

geocode(location, (error, data) => {
    if (error) {
        return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        console.log(data.location);
        console.log(forecastData);
    });
});


