import { format } from "date-fns";
import { v4 as uuid } from "uuid"; // commonJS: const { v4: uuid } = require('uuid'); // const { v4 } = require('uuid'); // const uuid = require('uuid');

import * as fs from "fs";
import * as fsPromises from "node:fs/promises"; 
import * as path from "path";

const __dirname = import.meta.dirname;

export const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
        // Check if directory 'logs' exists, if not, create it
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        // Write log
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
    } catch (err) {
        console.log(err);
    }
}
