const { log } = require('console');
const math = require('./math');
const fs = require('fs');


console.log(math.add(5, 3));
console.log(math.sub(5, 3));
console.log(math.mul(5, 3));
console.log(math.div(5, 3));


//inbuilt module
console.log(fs);

fs.writeFileSync("note.txt", "benni / suchi \n");
fs.appendFileSync("note.txt", "ashish / mana");
fs.readFileSync("note.txt");


const data =fs.readFileSync("note.txt");
console.log(data.toString());

// fs.mkdirSync("benni.js")
//  fs.renameSync("benni.js", "smruti.js");
fs.rmdirSync("smruti.js");