const readlineSync = require("readline-sync");

let n2 = 0;
let i1= 1;
while(n2 <= 100){
    console.log(n2);
    n2 = n2 + 2;
    i1++
}
console.log(i1);

for(i1=1;n2<100;i1++){
    console.log(n2);
    n2 = n2 + 2;
}
console.log(i1);
