export interface User {
    name: string
    id: number
    location?: string // ? means location may exist in some users || not required field?
}

const user: User = {
    name: "Haynes",
    id: 0,
}

// Function to accept an array of strings
function logArray(a: Array<string>) {
    console.log(a)
}
logArray(['muo', 'buo', 'kuo'])

// Same as logArray
function alsoLogArray(a: string[]) {
    console.log(a)
}
alsoLogArray(['muo', 'buo', 'kuo'])

// Not the same as logArray - this is passed a Tuple of ONE element
function anotherLog(a: [number]) {
    console.log(a)
}
anotherLog([1]) // if you put 2 or more elements in the [] like [1, 2], it will error

// Don't care what you pass me
function logAny(a: any) {
    console.log(a)
}
logAny({ 
    id: 0,
    name: "Mr Mister",
    lastname: "Pikachu"
})

const john: User = {
    id: 2,
    name: "John"
}

const names = ["Franc", "Jozef", "Lojze"]
names.map(name => {
    return {
        id: 0,
        name,
    };
});

function getCoords(coords: { x: number; y: number}) {
    return `x: ${coords.x}, y: ${coords.y}`;
}
// parameters from getCoords can also be used with an interface or type:
interface Coords { x: number; y: number }
type Coords1 = { x: number; y: number }
// Then pass as type of input param:
function getCooords(coords: Coords) {
    return `x: ${coords.x}, y: ${coords.y}`;
}
function getCoooords(coords: Coords1) {
    return `x: ${coords.x}, y: ${coords.y}`;
}

// Union types
export interface UserMan {
    name: string
    id: number | string // id can be number or string
    location?: string
}

function handleId(id: string | number) {
    if (typeof id === "string") {
        return id.toLowerCase();
    } else {
        return id.toString();
    }
}
console.log(handleId(12345));
console.log(handleId("OneTwoTHTHERH"));

// Check if 'letters' is an array of strings, if not, put the string into an array
function toArray(letters: string | string[]): string[] {
    if (typeof letters === "string") {
        return [letters];
    } else {
        return letters;
    }
}

type ID = number | string;
let num = "mutt";