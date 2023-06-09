/*const readlineSync = require("readline-sync");

let tab = [];

//permet de définir le nombre d'éléments que l'utilisateur veut insérer dans son tableaux. 
let n = readlineSync.question('Can you enter the number of element: ');

//permet d'entrez le premier element du tableaux et d ela pousser dedant.
let elem = readlineSync.question("Enter the first element of the table: ");
tab.push(elem);

//boucle permettant de faire remplir le tableaux par l'utilisateur. 
for(i=1; i<n; i++){

    elem = readlineSync.question("Enter an element of the table: ");
    tab.push(elem);
}

//Boucle affichant le tableaux
tab.forEach(function(item) {
    console.log(item);
});*/

let tab = [];
let n = 35;
let i ;
let elem = 1;

for(i=0; i<=n; i++){
    tab.push(elem);
    elem = elem *5;
}

tab.forEach(function(item) {
    console.log(item);
});
