var fs = require('fs');
 
// appendFile function with filename, content and callback function
fs.appendFile('newfile.txt', `Learn Node FS module \r\n`, function (err) {
  if (err) throw err;
  console.log('File is Appended successfully.');
});
