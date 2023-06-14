//initialisation de variables

const readlineSync = require("readline-sync");
class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get hello(){
        return 'Salut ' + this.firstname + ' ' + this.lastname;
    }
} 
let firstname = readlineSync.question('Pouvez-vous entrez votre prénom svp ? ');
let lastname =readlineSync.question('Pouvez-vous entrez votre nom de famille svp ? ');

let Sarah = new Person(firstname, lastname);
console.log(Sarah.hello);
