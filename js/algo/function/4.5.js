//initialisation de variables

const readlineSync = require("readline-sync");
let x1 = readlineSync.question('Pouvez vous entrez x1 svp  : ');
let x2 = readlineSync.question('Pouvez vous entrez x2 svp  : ');
let y1 = readlineSync.question('Pouvez vous entrez y1 svp  : ');
let y2 = readlineSync.question('Pouvez vous entrez y2 svp  : ');

//Appel de la fonction 
const distance = calcDistance(x1, x2, y1, y2);


console.log(distance); // Affiche le résultat de l'opération réaliser dans la fonction distance. 
//-------------------------------------------------------------------------------------------------
function calcDistance(x1, y1, x2, y2) {
    const distance = Math.sqrt(Math.pow((x2 - y2), 2) + Math.pow((y1 - x1), 2));
    return distance;
}
// function Math.sqrt => retourne le carré d'un nombre 
// fucntion Math.pow => retourne la valeur d'une base élevée à une puissance.

