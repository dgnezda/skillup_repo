// Basic types
let id: number | string = 5
let company: string = 'Stringy string'
let isString: boolean = true
let x: any = 'Hi'

// Array
let ids: number[] = [1, 2, 3, 4, 5]
ids.push(1)

let arr: any[] = [1, true, 'Hi']

// Tuple
let person: [number, string, boolean] = [1, 'Fritz', true] // Like a record, needs exactly 3 elements of types provided

let employee: [number, string][]

employee = [
    [1, 'Mak'],
    [2, 'Zak'],
    [3, 'Pak']
]

// Union
let pid: string | number = 22
pid = '22'

// Enum (set of named constants)
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction1.Left);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Left);

// Objects
type User = {
    id: number,
    name: string
}

const user: User ={
    id: 1,
    name: 'John'
}

// Type Assertion = tell compiler to treat an entity as a different type
let cid: any = 1
// let customerId = <number>cid // or:
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}
console.log(addNum(1, 3));

function log(message: string | number): void {
    console.log(message);
}
log('Hi')

// Interface - specific structure of an object
interface UserInterface { // note it doesn't need an equals sign after name!
    readonly id: number, // cannot change it later
    name: string
    age?: number // ? makes it optional
}

const user1: UserInterface ={
    id: 1,
    name: 'John'
}
// Difference between type and interface - you can't use an interface with primitives:
type Point = number | string // works
// interface Paint = number | string // nope
// For use with objects, use interface (usually)

interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y // because of using interface MathFunc, setting x/y or return value to anything else than number will error
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
interface PersonInterface {  // for mapping out exactly what your class or function will look like
    id: number, 
    name: string
    register(): string
}

class Person  implements PersonInterface {
    // private id: number // public by default - accessible from outside of class, such as brad.id = 4. private keyword prohibits ..
    id: number 
    // protected name: string // protected means you can only acces from within class or any class that is extended from this class
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "Brad Cred")
const mike = new Person(2, "Mike Bike")
console.log(brad, mike);
console.log(brad.register());

// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name) // calling the constructor of parent class
        this.position = position
    }
}

const emp = new Employee(3, 'Felix', 'Janitor')
console.log(emp.name);
console.log(emp.register()); // Employee class has access to register() from parent class

// Generics / for building reusable components
function getArray<T>(items: T[]): T[] { // kinda like in C++ typename .. 
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['ads', 'sdf', 'sdag'])

// numArray.push('5') // is ok, if getArray takes :any[] type, not ok if it takes placeholder <T> type
