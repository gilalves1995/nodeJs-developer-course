const fs = require('fs');
const chalk = require('chalk');

const success = chalk.green.inverse;
const error = chalk.red.bold.inverse;

const getNotes = () => {
    return "My notes...";
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};