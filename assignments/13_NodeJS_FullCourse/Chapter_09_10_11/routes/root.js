import express from "express";
import * as path from "path";
const __dirname = import.meta.dirname; 

export const router = express.Router();

router.get('^/$|/index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname }); // or:
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});