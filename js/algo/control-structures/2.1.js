const readlineSync = require("readline-sync");

let age = readlineSync.question('Veuillez introduire votre age : ?');


//test sur l'age => si age = moins de 18 ans on affiche tu n'es pas un adulte sinon on afiche tu est un adulte
if(age<18){
    console.log('Youre are not an adult !');
}
else{
    console.log('Youre an adult !');
}