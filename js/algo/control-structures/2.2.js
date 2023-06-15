const readlineSync = require("readline-sync");


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