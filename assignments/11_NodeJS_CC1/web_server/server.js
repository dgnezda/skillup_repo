const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http
    .createServer((req, res) => {
        //console.log(req.url, req.method);
        res.setHeader("Content-Type", "text/html");

        let path = './';
        switch(req.url) { // To
            case '/':
                path += 'index.html';
                res.statusCode = 200;
                break;
            case '/about':
                path += 'about.html';
                res.statusCode = 200;
                break;
            default:
                //path += '404.html'; // show 404 error for any page not found
                //res.statusCode = 404;
                res.setHeader("Location", "/");
                res.statusCode = 301; // redirect
                break;
        }

        fs.readFile(path, (err, data) => {
            if (err) {
                console.error(err);
                res.end();
            } else {
                //res.write(data);
                res.end(data);
            }
        });
    })
    
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


/* 
HTTP Status codes:

1xx Informational
    102 Processing
2xx Success
    200 Success / OK
3xx Redirection
    301 Permanent Redirect
    302 Temporary Redirect
4xx User/Client error
    401 Unauthorized Error
    403 Forbidden
    404 Not found
    405 Method not allowed
5xx Server Error
    501 Not implemented
    502 Bad Gateway
    503 Service unavailable
    504 Gateway Timeout
*/