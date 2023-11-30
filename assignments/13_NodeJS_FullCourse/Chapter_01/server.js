// Node.js global object:
//console.log(global);

// Imports (commonJS)
// const os = require('os');
import * as os from "os"; // CommonJS: const os = require('os')
import { URL } from 'url';
import * as path from "path";
import { add, subrtact, multiply, divide } from './Chapter_01/math.js';

console.log(add(2, 3));
console.log(subrtact(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
// const __dirname = new URL('.', import.meta.url).pathname;
// const __filename = new URL('', import.meta.url).pathname;


// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename)) // => object with individual valuse

