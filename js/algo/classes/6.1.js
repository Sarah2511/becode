const readlineSync = require("readline-sync");
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get hello(){
        return this.name + ' ' + this.age;
    }
}

let name = new Cat(readlineSync.question('Pouvez-vous entrez votre prénom svp ? '));
let age = new Cat(readlineSync.question('Pouvez-vous entrer l age svp ? '));
console.log(Cat.hello);
