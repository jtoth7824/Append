// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// read from command line the 3rd argument (index 2)
const filename = process.argv[2];
// text string to append to the file with a new line appended prior to the text
const appendText = "\nHello World";

// utilize Node standard library file system package for appending text to file
fs.appendFile(filename, appendText, (err) =>
  // check if error condition and log it
  // otherwise prompt user with log statement that file was updated successfully
  err ? console.error(err) : console.log('File updated successfully!')
);