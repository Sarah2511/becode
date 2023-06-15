const readlineSync = require("readline-sync");

let name;
let greeting; 

class Animal {
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}

class Cat {
    constructor(name, greeting) {
        this.greeting = greeting;
        this.name = name;
    }
}
class Dog {
    constructor(name, greeting) {
        this.greeting = greeting;
        this.name = name;
    }
}

test = readlineSync.question('Pouvez-vous entrer l age svp ? ');

greeting = new Cat(readlineSync.question('Pouvez-vous entrez votre prénom svp ? '));
name= new Cat(readlineSync.question('Pouvez-vous entrer l age svp ? '));
console.log(Cat.sayHello);

greeting = new Dog(readlineSync.question('Pouvez-vous entrez votre prénom svp ? '));
name= new Dog(readlineSync.question('Pouvez-vous entrer l age svp ? '));
console.log(Cat.sayHello);