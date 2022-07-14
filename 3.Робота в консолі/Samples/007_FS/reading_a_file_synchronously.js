//!Every method in fs module has a Sync version that blocks the main thread. So it is NOT recommended.

try {
  const fileData = fs.readFileSync('./app.js', 'utf8');
  console.log(fileData);
} catch (error) {
  console.log('Error occurred when loadind a file', error);
}
