//initialisation variable 
const readlineSync = require("readline-sync");
let largeur;
let longueur;
let surface;


// fonction permettant de calculer et de renvoyer la surface d'un rectangle.
function calcSurface(largeur, longueur,surface){
    largeur = readlineSync.question('Pouvez vous entre une largeur svp : ');
    longueur = readlineSync.question('Pouvez vous entre une longueur svp : ');
    surface = largeur * longueur;
    return surface;
}

// Appel de la fonction. 
surface = calcSurface(largeur, longueur,surface);

//Affichage de la fonction
console.log("la surface total du carrée vaut : ",surface);