import { logEvents } from "./logEvents.js";
import { EventEmitter } from 'events'; // const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', msg => logEvents(msg));

// Add delay time
setTimeout(() => {
    // Emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);