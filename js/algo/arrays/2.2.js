const readlineSync = require("readline-sync");

let tab = [];
let result = 0;
//permet de définir le nombre d'éléments que l'utilisateur veut insérer dans son tableaux. 
let n = readlineSync.question('Can you enter the number of element: ');

//boucle permettant de faire remplir le tableaux par l'utilisateur. 
for(i=0; i<=n; i++){

    elem = readlineSync.question("Enter an element of the table: ");
    tab.push(elem);
    result += elem;  
}
console.log('Le resultat est : ' + result)