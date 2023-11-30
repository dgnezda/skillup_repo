// ES6
import { readFileSync } from 'fs'; 

const output = readFileSync(new URL('./test.txt', import.meta.url));

console.log(output.toString());

// Replacement for __dirname and __filename in ES6
const dName = import.meta.dirname;
const fName = import.meta.filename;

import { URL } from 'url';
const __dirname = new URL('.', import.meta.url).pathname;
const __filename = new URL('', import.meta.url).pathname;

console.log(dName);
console.log(__dirname);
console.log(fName);
console.log(__filename);