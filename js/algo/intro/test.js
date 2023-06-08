const readlineSync = require("readline-sync");

//exercice 1.0 & 1.1
let multiplication;
let addition;
let soustraction;
let division; 
let modulo;

multiplication = 5*4;
console.log("5 * 4 = " + multiplication);

addition = 5+4;
console.log("5 + 4 = " + addition);

soustraction = 5-4;
console.log("5 - 4 = " + soustraction);

division= 5/4;
console.log("5 / 4 = " + division);

modulo = 5%4;
console.log("5 % 4 = " + modulo);


//exercice 1.2
let name = "Bourgeois";
let firstname = "Sarah";
let city = "Visé";

console.log(firstname);
console.log(name);
console.log(city);

//exercice 1.3
let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);