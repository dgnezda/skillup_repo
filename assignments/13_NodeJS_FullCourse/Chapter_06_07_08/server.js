import express from "express";
import cors from "cors";
import * as path from "path";
import { logger } from "./middleware/logEvents.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { router as router1} from "./routes/root.js";
import { router as router2} from "./routes/subdir.js";

const app = express();
const PORT = process.env.PORT ||3000;
const __dirname = import.meta.dirname; 

// Custom middleware logger (put at top to see all requests). Built-in middleware does not need 'next' param, custom does!
app.use(logger);
// Cross Origin Resource Sharing - needs to be applied, otherwise you get CORS errors, unless you need whitelist .. put in only domains that can access the site. like mywebsite.com
const whitelist = ['https://www.mysite.com', 'http://127.0.0.1:3000', 'http://localhost:3000'] // 'http://127.0.0.1:3000' => if you're using the VS Code go live server, check the port nr.
const corsOptions = {                                                                             // AFTER DEVELOPMENT, take the last two in the list out! (127 ... and localhost)
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) { // if the domain is in the whitelist. REMOVE | !origin AFTER DEVELOPMENT
            callback(null, true); // first param is error, so null, second means yes, send back the origin
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions)); 

// built-in middleware to handle urlencoded data
// so 'from data':
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false })); // app.use to apply middleware to all routes comming in, works as waterfall (put app.use above routes)
// built-in middleware for json, applied for all routes
app.use(express.json());
// serve static files (like css, images etc)
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/subdir', express.static(path.join(__dirname, '/public'))); // to make css and other files work for the subdirectory

// routes
app.use('/', router1);
app.use('/subdir', router2);
app.use('/employees', router3);

// app.use() is for middleware app.all() is for routing and will apply to all http methods at once
// Everything that made it to here should be a 404 error
app.all('*', (req, res) => {
    res.status(404); // need to set to 404, otherwise it's 200
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html')); 
    } else if (req.accepts('json')) {
        res.json({ error: "404 Not Found"})
    } else {
        res.type('txt').send("404 Not Found")
    }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// EXAMPLES
// // Route handlers
// app.get('/hello(.html)?', (req, res, next) => {
//     console.log('attempted to load hello.html');
//     next()
// }, (req, res) => {
//     res.send('Hello Worlda!');
// })

// // Chaining handlers:
// const one = (req, res, next) => {
//     console.log('one');
//     next();
// }

// const two = (req, res, next) => {
//     console.log('two');
//     next();
// }

// const three = (req, res) => {
//     console.log('three');
//     res.send("Finished");
// }

// app.get('/chain(.html)?', [one, two, three]);
//