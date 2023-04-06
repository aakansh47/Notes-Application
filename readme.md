# Notes Application
This is a notes application that allows you to add, remove, list and read notes using the command line interface (CLI).

## Functionality
The notes application has the following four functionalities:

###Add Note
To add a note, use the following command:


$ node app.js add --title="your note title" --body="your note body"
This command will add a new note to the notes list with the given title and body.

###Remove Note
To remove a note, use the following command:


$ node app.js remove --title="your note title"
This command will remove the note with the given title from the notes list.

###Read Note
To read a note, use the following command:

$ node app.js read --title="your note title"
This command will print the title and body of the note with the given title.

###List Notes
To list all notes, use the following command:

$ node app.js list
This command will print all notes in the notes list.

##Installation
To use this application, you need to have Node.js installed on your computer.

Clone this repository to your local machine.

In your terminal, navigate to the project folder.

Install the required packages by running the following command:

$ npm install

Usage
To run the application, use the following command in your terminal:

$ node app.js [command]
Replace [command] with one of the four available commands: add, remove, read, or list.

For example, to add a new note, use the following command:

$node app.js add --title="your note title" --body="your note body"

## License
This project is licensed under the MIT License. See the LICENSE file for details.