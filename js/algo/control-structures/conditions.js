const readlineSync = require("readline-sync");

//Exercice 2.1

let age = readlineSync.question('Veuillez introduire votre age : ?');

if(age<18){
    console.log('Youre are not an adult !');
}
else{
    console.log('Youre an adult !');
}

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

//Exercice 2.3

let n2 = 0;
let i1= 1;
while(n2 <= 100){
    console.log(n2);
    n2 = n2 + 2;
    i1++
}
console.log(i1);

for(i1=1;n2<100;i1++){
    console.log(n2);
    n2 = n2 + 2;
}
console.log(i1);

//Exercice 2.4

let n1 = 1;
let i2;
for(i2=1;n1<=100;i2++){
    if(n1%2 == 0){
        console.log(n1);
    }
    else{
        console.log(n1*3);
    }
    n1++;
}

//Exercice 2.5

let favouriteNumber = readlineSync.question('Veuillez introduire votre numero préféré : ?');

while(favouriteNumber != 42){
    console.log('Une erreur cest produit ! Veuillez reesayer! ');
    let favouriteNumber = readlineSync.question('Veuillez introduire votre numero préféré : ?'); 
}

//Exercice 2.6

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

//Exercice 2.7

let n = readlineSync.question('Veuillez introduire le nombre de chiffre que vous désirer additionner : ');
let i;
let result = 0;
for(i=0;i!=n;i++){
    let numberAdd = readlineSync.question('Veuillez introduire le nombre que vous désirer additionner : ');
    result = result + numberAdd;
}
console.log('Le résultat vaut : ' + result);