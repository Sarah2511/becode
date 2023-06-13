//intialisation de variables 
const readlineSync = require("readline-sync");
let n = readlineSync.question('Pouvez vous entrez n svp  : ');
const resultat = factorielle(n);

//Affichage du résultat 
console.log(resultat);

//-------------------------------------------------------------------------------------------------------------
// la factorielle d'un entier naturel n est le produit des nombres entiers strictement positifs inférieurs ou égaux à n.
// fonction recursive => fonction qui s'appelle elle même. = ligne 12.      
function factorielle(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

