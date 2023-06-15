const readlineSync = require("readline-sync");

let n1 = 1;
let i2;
for(i2=1;n1<=100;i2++){
    if(n1%2 == 0){
        console.log(n1);
    }
    else{
        console.log(n1*3);
    }
    n1++;
}