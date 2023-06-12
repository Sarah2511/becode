//initialisation de variable.
let resultat;

//Appel de la fonction dans un boucle pour vérifier que le nombre généré est compris entre 1 et 10;
do {
    resultat = rand10();
} while (resultat < 1 || resultat > 10);




//Afficher le resultat.
console.log("Le resultat vaux : " + resultat);


//-----------------------------------------------------------------------------------------------

// fonction permettant de générer un nombre aléatoire 
function rand10(){
    resultat = Math.floor(Math.random() * 10)+1;
    return resultat;
}