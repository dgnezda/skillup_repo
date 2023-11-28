// // Log a log
// console.log('Hello from main.js')

// // Vars
// let nameOfTheVar = 123
// console.log(nameOfTheVar)

// const celery = 80000
// console.log(celery)

// let sum = 0
// sum = 3
// console.log(sum)

// always use const unless you expect the value to change

// Data types: string number boolean, undefined, null, BigInt, Symbol // Object

const name = "waiddjsd"
const lang = "JS"
const channel = "TV"

const total = 0
const Pi = 3.14159

const ifPrime = true
const narobe = false

let result
//console.log(result)

const res = null

// Objects - literal
const person = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 30
}

// console.log(person.firstName)

// // Object - Array

// const oddNums = [1, 3, 5, 7, 9]
// console.log(oddNums[0])

// // ternaray op

// const isTrue = 8 % 2 === 0 ? true : false
// console.log(isTrue)

// // type conversion
// console.log('3' - 3)
// console.log(true * 5)

// console.log(Number('123'))
// parseFloat('3.21')
// parseInt('123')
// String(1235)
// //or
// console.log((500).toString())
// Boolean(12) // false: 0 '' "" NaN undefined ('falsey' values)
// console.log(Boolean('    '))

// Equality
// == allows coercion / === does not allow coercion:
const var1 = 10
const var2 = '10'

//console.log(var1 == var2) // JS converts values then compares => true
//console.log(var1 === var2) // JS will not convert, strict equals

const nom = 0

// if (nom > 0) {
//     console.log('Nom is happy')
// } else if (nom < 0) {
//     console.log('Nom is sad')
// } else {
//     console.log('Nom is circular')
// }

// const color = 'red'

// switch(color) {
//     case 'red':
//         console.log('Color of the star')
//         break
//     case 'blue':
//         console.log('Color is sad')
//         break
//     case 'black':
//         console.log('Color is metal')
//         break
//     default:
//         console.log('You know more colors than I')
// }

// Loopy loops
// for (let i = 1; i <= 5; ++i) {
//     console.log(`I'm blu, da ba di da ba ${i}`)
// }
// let i = 1
// let yoMama = 'thin'

// while (yoMama != 'fat') {
//     if (i <= 5) {
//         console.log('Yo mama should eat more')
//         i++
//     } else {
//         console.log('Wow, yo mama so fat she makes the sea rise when she gets near it')
//         yoMama = 'fat'
//     }
// }

// let i = 0
// do {
//     console.log(`I ate ${i} burgers. One more?`)
//     ++i
// } while (i <= 5)

// for of
// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (const num of i) {
//     console.log(`Iteration member ${num}`)
// }

// Funktions

function funk(nom1, nom2, nom3) {
    console.log(`I'd love to ${nom1} a ${nom2} & ${nom3} sandwich`)
}

funk('eat', 'ham', 'cheese')

function add(a, b) {
    return a + b
}

console.log(add(5, 6))

// arrow funk
const nums = (a, b) => {
    return a + b
}
// ==
const arrowSum = (a, b) => a + b
const P = a => console.log(a)

// scope
const myNam = (nm) => {
    console.log(nm)
}