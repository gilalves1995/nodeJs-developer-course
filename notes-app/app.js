const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create the Add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create the Remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Create the List command
yargs.command({
    command: 'list',
    describe: 'Lists all the notes.',
    handler() {
        console.log('Listing all notes.');
    }
});

// Create the Read command
yargs.command({
    command: 'read',
    describe: 'Reads a note.',
    handler() {
        console.log('Reading a note.');
    }
});

yargs.parse();













// Chalk - easily define themes
// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');

// console.log(validator.isURL('https:/mead.io'));

/*
*  Use npm module system: first step is to initialize npm from the project's root
*  Npm install generates the folder node_modules with package.json info
* */



// const add = require('./utils');
// const sum = add(4, -2);
// console.log(sum);


