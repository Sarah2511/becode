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

//exercice 1.4
let Name = readlineSync.question('Can you give me your name please?');
let FirstName = readlineSync.question('Can you give me your firstname please?');
let city1 = readlineSync.question('Can you give me the city where you live please?');
console.log("Hello " + FirstName + " " + Name + " who live in " + city1 );

//Exercice 1.5
let Number1 = readlineSync.question('Can you give me a number : ?');
let Number2 = readlineSync.question('Can you give me a number : ?');

let Number1end = Math.trunc(Number1);
let multiply = Number1end * Number2;

console.log(multiply);

//Exercices 1.6
let dividende = readlineSync.question('Veuillez entrer le dividende : ?');
let diviseur = readlineSync.question('Veuillez entrer le diviseur : ?');

let dividendei = Math.trunc(dividende);
let diviseuri =  Math.trunc(diviseur);
let resultat =  dividendei % diviseuri;

console.log(resultat);