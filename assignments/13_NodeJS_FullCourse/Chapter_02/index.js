import * as fs from "fs";

fs.readFile('./files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(String(data)); // or data.toString()
})