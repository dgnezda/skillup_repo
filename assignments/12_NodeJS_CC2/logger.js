import { EventEmitter } from 'events';
import * as uuid from 'uuid';
import * as path from 'path';
import * as fs from 'fs';
import { URL } from 'url';

//const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg }); // because the names are the same, you can just write 'msg' instead of 'msg: msg' for second key-value pair
        fs.appendFile(path.join(__dirname, '', 'log.txt'), `\nid: ${uuid.v4()}, msg: ${msg}`, err => {
            if(err) throw err;
            console.log('File appended to');
        })
    }
}

export { Logger };


// EXAMPLE USE:

// import { Logger } from './logger.js';
// const logger = new Logger();
// logger.on('message', data => console.log('Called Listener:', data));
// logger.log('Hello World')
// logger.log('Besame')
// logger.log('Hi')
// logger.log('Majkemi')
// logger.log('Mucho')



