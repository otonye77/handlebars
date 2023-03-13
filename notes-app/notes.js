const fs = require("fs");

const getNotes = () => {
  return "Your Notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((n) => n.title === title);
  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("Notes added");
  } else {
    console.log("Notes title taken");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return filteredNotes;
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log("Note not found");
  }
};

module.exports = {
  getNotes,
  addNotes,
  removeNote,
  listNotes,
  readNote,
};
