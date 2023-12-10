"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Haynes",
    id: 0
};
// Function to accept an array of strings
function logArray(a) {
    console.log(a);
}
logArray(['muo', 'buo', 'kuo']);
// Same as logArray
function alsoLogArray(a) {
    console.log(a);
}
alsoLogArray(['muo', 'buo', 'kuo']);
// Not the same as logArray - this is passed a Tuple of ONE element
function anotherLog(a) {
    console.log(a);
}
anotherLog([1]); // if you put 2 or more elements in the [] like [1, 2], it will error
// Don't care what you pass me
function logAny(a) {
    console.log(a);
}
logAny({
    id: 0,
    name: "Mr Mister",
    lastname: "Pikachu"
});
