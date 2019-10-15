const https = require('https');
const url = `https://api.darksky.net/forecast/9bf79a7dd4e3e589442f0f7f29ff283f/40,-75?units=si`;

const request = https.request(url, response => {
    let data = '';

    // Registers an handler for when data comes in
    response.on('data', chunk => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.end();