// import { readFile } from 'node:fs';
const fs = require('fs')
const path = require('path')

// fs.readFile(path.join(__dirname,'files','read.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fs.writeFile(path.join(__dirname, 'files', 'write.txt'), 'its working done', (err) => {
  if (err) throw err;
  console.log('Write complete');

  // Append content to the file
  fs.appendFile(path.join(__dirname, 'files', 'write.txt'), 'its working hi \nthank you edit working', (err) => {
    if (err) throw err;
    console.log('Append complete');

    // Rename the file
    fs.rename(path.join(__dirname, 'files', 'write.txt'), path.join(__dirname, 'files', 'renamefile.txt'), (err) => {
      if (err) throw err;
      console.log('Rename complete');
    });

  });
});

// fs.appendFile(path.join(__dirname,'files','writes.txt'), 'its working hi \n thank you edit working', (err) => {
//   if (err) throw err;
//   console.log('append complete');
// }); //create new file also

process.on('uncaughtException', err => {
  console.error(`Here is the error ${err}`)
  process.exit(1)
})
