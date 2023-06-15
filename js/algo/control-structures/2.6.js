const readlineSync = require("readline-sync");

let days = readlineSync.question('Veuillez introduire un nombre compris entre 1 et 7 : ');
switch(days){
    case '1' : console.log('Lundi');
    break;
    case '2' : console.log('Mardi');
    break;
    case '3' : console.log('Mercredi');
    break;
    case '4' : console.log('jeudi');
    break;
    case '5' : console.log('vendredi');
    break;
    case '6' : console.log('samedi');
    break;
    case '7' : console.log('Dimanche');
    break;
    default: console.log('Désoler aucun jour ne correspond a ce nombre!');
}