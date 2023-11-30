import * as fs from "fs";

// If folder does not exsist, create it (to not overwrite existing data!)
if (!fs.existsSync('./new')) {
    fs.mkdir('./new', err => {
        if (err) throw err;
        console.log('Directory created');
    })
} 

//
if (fs.existsSync('./new')) {
    fs.rmdir('./new', err => {
        if (err) throw err;
        console.log('Directory removed');
    })
} 

