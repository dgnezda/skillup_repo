import express from "express";
import cors from "cors";
import * as path from "path";
import { logger } from "./middleware/logEvents.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { router as rootRouter} from "./routes/root.js";
import { router as employeesRouter } from "./routes/api/employees.js";
import { router as registerRouter } from "./routes/register.js";
import { router as authRouter } from "./routes/auth.js";
import { corsOptions } from "./config/corsOptions.js";

const app = express();
const PORT = process.env.PORT ||3000;
const __dirname = import.meta.dirname; 

// Custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors(corsOptions)); 

// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json, applied for all routes
app.use(express.json());

// serve static files (like css, images etc)
app.use('/', express.static(path.join(__dirname, '/public')));

// routes                       
app.use('/', rootRouter);
app.use('/employees', employeesRouter);
app.use('/register', registerRouter);
app.use('/auth', authRouter);

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