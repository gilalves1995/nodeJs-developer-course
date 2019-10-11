const validator = require('validator');
const getNotes = require('./notes');

const notes = getNotes();
console.log(notes);

console.log(validator.isURL('https:/mead.io'));



/*
*  Use npm module system: first step is to initialize npm from the project's root
* */





// const add = require('./utils');
// const sum = add(4, -2);
// console.log(sum);


