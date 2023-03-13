const validator = require("validator");
const { argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes");

//add - remove - read - list
yargs.command({
  command: "remove",
  describe: "removing a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "add",
  describe: "adding a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "list",
  describe: "Listing note",
  handler: () => {
    console.log("Listing notes");
  },
});

yargs.command({
  command: "read",
  describe: "Reading note",
  handler: () => {},
});

yargs.parse();
