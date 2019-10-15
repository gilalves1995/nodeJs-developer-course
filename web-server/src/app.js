const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../views'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

// Set the template engine Express.js will use
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    // .render to serve hbs templates
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'This is an help message!'
    });
});


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

// Handlebars - Template Engine to render dynamic web pages and way of reusing components such as headers
