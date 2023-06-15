const readlineSync = require("readline-sync");
let Number1 = readlineSync.question('Can you give me a number : ?');
let Number2 = readlineSync.question('Can you give me a number : ?');

let Number1end = Math.trunc(Number1);
let multiply = Number1end * Number2;

console.log(multiply);