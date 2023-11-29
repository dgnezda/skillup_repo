import * as path from 'path';
import * as fs from 'fs'; // fs == file system

// Create directory
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created');
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if(err) throw err;
//     console.log('File created and written to');

//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nI love Node.Js', err => {
//         if(err) throw err;
//         console.log('File appended to');
//     })
// })

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
    if(err) throw err;
    console.log('File renamed');
})
