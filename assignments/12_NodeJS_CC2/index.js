import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content);
    //     })
    // } else if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 50},
    //         { name: 'Nob Sjmith', age: 40}
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(users));
    // }

    // Build filepath
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    
    // Extension of file
    let extName = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENONET') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), 
                (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType }); // contentType set previously ..
            res.end(content, 'utf8');
        }
    })

})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));