const { writeFile, writeFileSync, appendFile, rename, unlink } = require("fs")

const newContent = '\nHi with new line!'

// async version: (default ...)
writeFile('hi.txt', newContent, { flag: 'a' }, (err) => { // rewrites file by default, add { flag: 'a' } for append
    if (err) {
        console.error(err)
        return
    }
    console.log('Content written')
})

// sync version
try {
    writeFileSync('hi.txt', newContent)// no flag, rewrites
    console.log('Content written')
} catch (err) {
    console.error(err)
}

// direct append function, no flag needed
appendFile('hi.txt', newContent, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Content written')
})

// rename file
rename('hi.txt', 'hello.txt', (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('File renamed')
})

// delete file
unlink('hi.txt', (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('File deleted')
})