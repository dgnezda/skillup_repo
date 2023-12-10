"use strict";
// Basic types
let id = 5;
let company = 'Stringy string';
let isString = true;
let x = 'Hi';
// Array
let ids = [1, 2, 3, 4, 5];
ids.push(1);
let arr = [1, true, 'Hi'];
// Tuple
let person = [1, 'Fritz', true]; // Like a record, needs exactly 3 elements of types provided
let employee;
employee = [
    [1, 'Mak'],
    [2, 'Zak'],
    [3, 'Pak']
];
// Union
let pid = 22;
pid = '22';
// Enum (set of named constants)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion = tell compiler to treat an entity as a different type
let cid = 1;
// let customerId = <number>cid // or:
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
function log(message) {
    console.log(message);
}
log('Hi');
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y; // because of using interface MathFunc, setting x/y or return value to anything else than number will error
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad Cred");
const mike = new Person(2, "Mike Bike");
console.log(brad, mike);
console.log(brad.register());
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // calling the constructor of parent class
        this.position = position;
    }
}
const emp = new Employee(3, 'Felix', 'Janitor');
console.log(emp.name);
console.log(emp.register()); // Employee class has access to register() from parent class
// Generics / for building reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['ads', 'sdf', 'sdag']);
// numArray.push('5') // is ok, if getArray takes :any[] type, not ok if it takes placeholder <T> type
