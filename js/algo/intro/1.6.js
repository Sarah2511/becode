const readlineSync = require("readline-sync");

let dividende = readlineSync.question('Veuillez entrer le dividende : ?');
let diviseur = readlineSync.question('Veuillez entrer le diviseur : ?');

let dividendei = Math.trunc(dividende);
let diviseuri =  Math.trunc(diviseur);
let resultat =  dividendei % diviseuri;

console.log(resultat);