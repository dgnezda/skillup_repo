import * as http from "http";
import * as path from "path";
import * as fs from "fs";
import * as fsPromises from "node:fs/promises"; 
import { logEvents } from "./logEvents.js";
import { EventEmitter } from 'events'; // const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};
// initialize object
const myEmitter = new MyEmitter();
const PORT = process.env.PORT ||3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    const extension = path.extname(req.url);
    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    // Chained ternary statement / can be written as if-elseif-elseif-else statement
    let filePath =
        contentType === 'text/html' && req.url === '/' // if content type is text/html and the request url is just a slash
            ? path.join(__dirname, 'views', 'index.html') // then the path is dirname/views/index.html. if not, we look at next condition:
            : contentType === 'text/html' && req.url.slice(-1) === '/'  // if con.type is text/htm and the request url's last character is a slash, then this accounts for a subdirectory and not the main dir.
                ? path.join(__dirname, 'views', req.url, 'index.html') // then we need the views in the filename and also the request url. if not,
                : contentType === 'text/html' // then we check if the content type is text/html at all, if yes
                    ? path.join(__dirname, 'views', req.url) // then the file should be in the views folder, hence path
                    : path.join(__dirname, req.url); // if not, then it's probably css or image or something else, we need the dirname/req.url path
    
    if (!extension && req.url.slice(-1) !== '/')
});

// Always put at the end of server.js:
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// add listener for the log event
// myEmitter.on('log', msg => logEvents(msg));

// Add delay time
// setTimeout(() => {
//     // Emit event
//     myEmitter.emit('log', 'Log event emitted!');
// }, 2000);