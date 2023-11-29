import { EventEmitter } from 'events';

// Create class
class MyEmitter extends EventEmitter {} // don't need to have anything in it

// Init MyEmitter object
const my_emitter = new MyEmitter();

// Event listener
my_emitter.on('event', () => console.log('Event fired!')) // first param is the event, second is the callback f when event triggered

// Init event
my_emitter.emit('event');
my_emitter.emit('event');
my_emitter.emit('event');
my_emitter.emit('event');