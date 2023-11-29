//const fs = require('fs') ==> but needs fs.readfile to call functions
const { readFile, readFileSync } = require("fs")

readFile('hi.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return
    }
    console.log(data, '\t\t- third') // logs third
})

try {
    const data = readFileSync('hi.txt', 'utf8')
    console.log(data, '\t\t- first') // logs first
} catch (err) {
    console.error(err)
}


console.log('Log from outside \t- second') // logs before 'third' because of asynchronous nature of Node!

