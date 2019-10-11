// const validator = require('validator');

const chalk = require('chalk');
const getNotes = require('./notes');

const notes = getNotes();
console.log(notes);

// Chalk - easily define themes
const error = chalk.bold.red;
const warning = chalk.keyword('orange');


console.log(error("Error. Try again later."));
console.log(warning("Dangerous. Are you sure you want to open the door?"));
console.log(chalk.green("Success!"));

console.log(chalk.bgRed.bold.inverse("Messing things up!"));





// console.log(validator.isURL('https:/mead.io'));

/*
*  Use npm module system: first step is to initialize npm from the project's root
*  Npm install generates the folder node_modules with package.json info
* */



// const add = require('./utils');
// const sum = add(4, -2);
// console.log(sum);


