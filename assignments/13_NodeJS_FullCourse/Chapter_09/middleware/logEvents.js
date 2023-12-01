import { format } from "date-fns";
import { v4 as uuid } from "uuid"; // commonJS: const { v4: uuid } = require('uuid'); // const { v4 } = require('uuid'); // const uuid = require('uuid');

import * as fs from "fs";
import * as fsPromises from "node:fs/promises"; 
import * as path from "path";

const __dirname = import.meta.dirname;

export const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
        // Check if directory 'logs' exists, if not, create it
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }
        // Write log
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
    } catch (err) {
        console.log(err);
    }
}

export const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt') // req.method = GET for example, req.header.origin - where is the request comming from?, req.url = index.html, so:
    console.log(`${req.method} ${req.path}`);                       // GET      google.com      index.html
    next();
}