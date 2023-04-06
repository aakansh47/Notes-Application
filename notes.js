import fs from "fs";
import chalk from 'chalk';


const addNote = (title, body) =>{
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) =>
     note.title === title
  );
    debugger
  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    
    console.log(chalk.green("New Note Added"));
    saveNotes(notes);
  } else {
    console.log(chalk.red("Note Title Taken"));
  }
}


const removeNote = (title) => {
    const notes = loadNotes();
    const indexToDelete = notes.findIndex((note) => note.title === title);
      if (indexToDelete !== -1) {
          notes.splice(indexToDelete,1);
          console.log(chalk.green('Note Succefully Removed'))
      }
      else {
          console.log(chalk.red('No such note'));
      }
  
      saveNotes(notes);
  }

const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.green('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title);

    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.greenBright(note.title));
        console.log(note.body);
    }
    else {
        console.log(chalk.red("No Note was Found")) 
    }
    
}


const saveNotes = (notes) =>  {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

export { addNote, removeNote, listNote , readNote};
