const readlineSync = require("readline-sync");

// Demande à l'utilisateur d'entrer son numéro préféré
let favouriteNumber = readlineSync.question('Veuillez introduire votre numéro préféré : ?');

// Boucle tant que le numéro préféré n'est pas égal à 42
while (favouriteNumber != 42) {
    // Affiche un message d'erreur et invite l'utilisateur à réessayer
    console.log('Une erreur s\'est produite ! Veuillez réessayer !');
    
    // Demande à nouveau à l'utilisateur d'entrer son numéro préféré
    favouriteNumber = readlineSync.question('Veuillez introduire votre numéro préféré : ?');
}

