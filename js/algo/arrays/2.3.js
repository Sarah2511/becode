const readlineSync = require("readline-sync");

//initialisation de variables.
let table1 = [];
let table2 = [];
let elem1 = 0;
let elem2 = 0;
let i;


//l'utillisateur entre un nombre n d'element.
let n = readlineSync.question('Can you enter the number of element: ');

for(i=1; i<=n; i++){
    elem1 = readlineSync.question("Enter an element of the table : ");
    table1.push(elem1); 
    elem2 = elem1
    table2.push(elem2)   
}
console.log("tableau 2 : ");
table1.forEach(function(item) {
    console.log(item);
});

console.log("tableau 2 : ");
table2.forEach(function(item) {
    console.log(item);
});

console.log(i);





