// In addition to fs module there is a fs/promises that uses promises instead of callbacks for all the methods

import fs from 'fs/promises';

fs.readFile('./app.js', 'utf8')
  .then(content => {
    console.log(content);
  })
  .catch(error => {
    console.log(`Can't read a file`, error);
  })

//OR

(async () => {
  try {
    const content = await fs.readFile('./app.js', 'utf8');
    console.log(content);
  } catch (error) {
    console.log(`Can't read a file`, error);
  }
})();
