import express from "express";
import cors from "cors";
import * as path from "path";
import { logger } from "./middleware/logEvents.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { router as rootRouter} from "./routes/root.js";
import { router as employeesRouter } from "./routes/api/employees.js";
import { router as registerRouter } from "./routes/register.js";
import { router as authRouter } from "./routes/auth.js";
import { router as refreshRouter } from "./routes/refresh.js";
import { router as logoutRouter } from "./routes/logout.js";
import { corsOptions } from "./config/corsOptions.js";
import { verifyJWT } from "./middleware/verifyJWT.js";
import cookieParser from "cookie-parser";
import { credentials } from "./middleware/credentials.js";

const app = express();
const PORT = process.env.PORT ||3000;
const __dirname = import.meta.dirname; 

// Custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirements
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions)); 

// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json, applied for all routes
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// serve static files (like css, images etc)
app.use('/', express.static(path.join(__dirname, '/public')));

// routes - work like waterfall - any rout you don't want verified by verifyJWT needs to come before line 37 (app.use(verifyJWT))                  
app.use('/', rootRouter);
app.use('/register', registerRouter);
app.use('/auth', authRouter);
app.use('/refresh', refreshRouter);
app.use('/logout', logoutRouter);

app.use(verifyJWT);
app.use('/employees', employeesRouter);

app.all('*', (req, res) => {
    res.status(404);
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