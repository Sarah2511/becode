const readlineSync = require("readline-sync");

let n = readlineSync.question('Veuillez introduire le nombre de chiffre que vous désirer additionner : ');
let i;
let result = 0;
for(i=0;i!=n;i++){
    let numberAdd = readlineSync.question('Veuillez introduire le nombre que vous désirer additionner : ');
    result = result + numberAdd;
}
console.log('Le résultat vaut : ' + result);