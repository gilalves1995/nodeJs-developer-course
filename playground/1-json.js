const fs = require('fs');

// Javascript object - very similar to JSON notation
/*
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);
*/

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Gil';
data.age = 24;

fs.writeFileSync('1-json.json', JSON.stringify(data));


/*
// Converts a javascript object to its json representation
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// Converts a json representation to a javascript object
const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);
*/



