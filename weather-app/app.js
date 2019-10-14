// Single-threaded - only one thing can be executed at a time
// Non-blocking - waiting for a task to finish does not causes the execution to block (callbacks)

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Boston', (error, data) => {
    console.log(error);
    console.log(data);
});

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});
