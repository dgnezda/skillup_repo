import * as fs from "fs";
import * as fsPromises from "node:fs/promises"; // CommonJS: const fsPromises = require('fs').promises;
import * as path from "path";

const __dirname = import.meta.dirname; // need to do this for ES6

const fileOps = async () => {
    try {
        // Reading a file
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        // Logging the data
        console.log(data);
        // Delete OG file
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        // Writing the date to a new file
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        // Appending to the new file
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice To Meet You');
        // Renaming the new file
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'),  path.join(__dirname, 'files', 'promiseComplete.txt'));
        // Reading the new file
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch(err) {
        console.error(err);
    }
}

fileOps();

//fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // String(data) or data.toString() / if you put 'utf8' as second param in readFile, it's not necessary to convert to string
})

console.log('Hello ...') // gets printed before readFile, because readFile is an async function


// Because these are async functions, you need to nest them if you want them to complete in specific order:
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
//     if (err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', (err) => {
//         if (err) throw err;
//         console.log('Append complete'); 

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename complete'); 
//         })
//     })
// })

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), '\nTesting text', (err) => {
//     if (err) throw err;
//     console.log('Append complete'); 
// })

// Exit on uncaught errors
process.on('uncaughtExceptrion', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})