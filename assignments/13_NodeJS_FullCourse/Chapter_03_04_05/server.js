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
const __dirname = import.meta.dirname; 

const serveFile = async (filePath, contentType, response) => {
    try {
        const data = await fsPromises.readFile(filePath, 'utf8');
        response.writeHead(200, {'Content-Type': contentType});
        response.end(data);
    } catch (err) {
        console.log(err);
        response.statusCode = 500;
        response.end();
    }
}

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
    
    // Makes the .html extension not required in the browser
    if (!extension && req.url.slice(-1) !== '/') {// if there is no file extension and the last char is not a slash, so like 'about' or 'newpage' and we didn't/forgot to type the file extension
        filePath += '.html'; // we add the .html to make it work
    }

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        // serve the file
        serveFile(filePath, contentType, res);
    } else {
        switch(path.parse(filePath).base) {
            case 'old-page.html':
                res.writeHead(301, {'Location': '/new-page.html'});
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, {'Location': '/'});
                res.end();
                break;
            default:
                // serve a 404 response
                serveFile(path.join(__dirname, 'views', '404.html'), 'test/html', res);
        }
    }
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