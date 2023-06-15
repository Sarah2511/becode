const readlineSync = require("readline-sync");

let Name = readlineSync.question('Can you give me your name please?');
let FirstName = readlineSync.question('Can you give me your firstname please?');
let city1 = readlineSync.question('Can you give me the city where you live please?');
console.log("Hello " + FirstName + " " + Name + " who live in " + city1 );