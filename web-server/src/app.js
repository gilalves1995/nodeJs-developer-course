// Core modules
const path = require('path');

// Npm modules
const express = require('express');


console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));


/*
app.get('/help', (req, res) => {
    res.send({
        name: 'Andrew',
        age: 27
    });
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});
*/

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is 52 degrees outside. 0% probability of rain',
        location: 'Lisbon'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});



// 1 domain (app.com), 1 single express server, multiple routes
// app.com
// app.com/help
// app.com/about


// __dirname is the full path where the script lives and __filename is the full path to the file
