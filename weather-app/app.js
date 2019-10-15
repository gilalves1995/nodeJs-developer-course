// Single-threaded - only one thing can be executed at a time
// Non-blocking - waiting for a task to finish does not causes the execution to block (callbacks)

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
    return console.log("You must provide a location.");
}

geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
        return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        console.log(location);
        console.log(forecastData);
    });
});


