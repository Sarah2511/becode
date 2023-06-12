//initialisation de variables
const readlineSync = require("readline-sync");
let n;
let table = [];

table = multiRand(n);

//----------------------------------------------------------------------
// fonction permettant de générer un nombre aléatoire 
function rand10(){
    resultat = Math.floor(Math.random() * 10)+1;
    return resultat;
};


// Fonction permettant de remplir un tableaux avec des nombre aléatoir et de  l'afficher
function multiRand(n,table){
    n = readlineSync.question('How much number do you want in your table : ');
    table = [];
    
    for(i = 0; i < n ; i++ ){
        let table = [];
        resultat= rand10();
        table.push(i);
        console.log(table);
    }
}