const express = require('express');
const app = express();

// Provides data on a particular url or endpoint
// res contains a set of methods to customize the response we sent back to the requester
app.get('', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/help', (req, res) => {
    res.send('Help page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/weather', (req, res) => {
    res.send('View weather');
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});



// 1 domain (app.com), 1 single express server, multiple routes
// app.com
// app.com/help
// app.com/about
