const fs = require('fs');
const chalk = require('chalk');

const success = chalk.green.inverse;
const error = chalk.red.bold.inverse;

const addNote = (title, body) => {
    const notes = loadNotes();

    // .find is similar to filter except that returns the first note with the provided title
    const duplicateNote = notes.find(note => note.title === title);

    debugger;

    if (!duplicateNote) {
        notes.push({ title: title, body: body });
        saveNotes(notes);
        console.log('Note saved!');
    } else {
        console.log('Note title taken.');
    }
};

const removeNote = title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(success('Note removed!'));
    } else {
        console.log(error('No note found!'));
    }
};

const readNote = title => {
    const notes = loadNotes();
    const found = notes.find(note => note.title === title);

    if(found) {
        console.log(chalk.green.bold(found.title));
        console.log(found.body);
    } else {
        console.log(chalk.red.bold("No note found."));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.bold("Your notes"));
    notes.forEach(note => console.log(note.title));
};

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
};