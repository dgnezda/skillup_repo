import * as fs from "fs";

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new_lorem.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

// More efficient than above:
rs.pipe(ws);