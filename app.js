// ipmort module libraries from node package manager

import yargs from 'yargs'
import { addNote, removeNote, listNote, readNote } from './notes.js'

// Yargs stored version number
const yarg = yargs()
yarg.version('1.0.0')

// --- ADD COMMAND ----
yarg.command({
  command: 'add',
  describe: 'Have Jenkins add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note content',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    addNote(argv.title, argv.body)
  }
})

// --- REMOVE COMMAND ----
yarg.command({
  command: 'remove',
  describe: 'Have Jenkins remove an existing note',
  builder: {
    title: {
      describe: 'Note to be deleted',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    removeNote(argv.title)
  } 
})

// --- READ COMMAND ----
yarg.command({
  command: 'read',
  describe: 'Have Jenkins read your notes',
  handler(argv) {
      readNote(argv.title)
  }
})

// --- LIST COMMAND ----
yarg.command({
  command: 'list',
  describe: 'Have Jenkins list your notes',
  handler() {
   listNote();
  }
})

yarg.parse(process.argv.slice(2))