import fs from 'fs';

fs.readFile('./app.js', (error, fileData) => {
  // File reading failed if the error is not empty 
  if (error) { 
    console.log('Error occurred when loadind a file', error);
    return;
  }
  
  // Otherwise fileData contains a Buffer with file content
  console.log(fileData.toString()); // to convert the Buffer data to string
});

//! You can specify the encoding when reading a file

// fs.readFile('./app.js', 'utf8', (error, fileData) => {});
