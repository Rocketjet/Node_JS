/* 
1. File is created, if it does not exist
2. Content is replaced with the new one
*/
import fs from 'fs';

const content = 'File content'

fs.writeFile('/Users/joe/test.txt', content, (error) => {
  if (!error) {
    // File written successfully
  }
});

//! You can use file system flags when writing a file

// fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, (error) => {})

//! You can append a content instead of replacing it completely

// fs.appendFile('/Users/joe/test.txt', content, (error) => {});
