const readlineSync = require("readline-sync");

//Exercice 2.1
/*let age = readlineSync.question('Veuillez introduire votre age : ?');

if(age<18){
    console.log('Youre are not an adult !');
}
else{
    console.log('Youre an adult !');
}*/

//Exercices 2.2
let minAge = readlineSync.question('Veuillez introduire votre age minimum : ?');
let maxAge = readlineSync.question('Veuillez introduire votre age maximum : ?');
if(minAge>maxAge){
    console.log('Dommage !! Vous étiez censer entrer un age minimum inférieur a l age maximum ');
}
else{
    let currentAge = readlineSync.question('Veuillez introduire votre age votre age actuel : ?');

    if(currentAge <= minAge || currentAge >= maxAge){
        console.log(currentAge);
    }
}



