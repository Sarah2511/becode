//initialisation variable.

let table = [123,24,136,48,56,125];
let min = table[0];
let max = table[0];


for(i = 0; i < table.length ; i++ ){
    if(table[i] < min){
        min = table[i];
    }
}


for(i = 0; i < table.length ; i++ ){
    if(table[i] > max){
        max = table[i];
    }
}

console.log('le minimum vaut : ' + min);
console.log('le maximum vaut : ' + max);
