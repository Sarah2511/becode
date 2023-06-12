//initialisation de variables
const readlineSync = require("readline-sync");
let arr = [];
let random; 
let n  = readlineSync.question('Pouvez vous entrez le nombre de chiffre qui composera votre tableaux :  ');
for(i=1; i<=n; i++){
    random = Math.floor(Math.random() * 100)+1;
    arr.push(random); 
}
arr.forEach(function(item) {
    console.log(item);
});

console.log('La moyenne du tableaux vaut :' + averrage(arr));
console.log('Le min du tableaux est  : ' + min(arr));
console.log('Le max du tableaux est  : ' + max(arr));
//-------------------------------------------------------------------------------------------------------
function averrage(arr){
    arr.forEach(function(item) {
        let resultat;
        resultat = resultat + item;
        resultat /=2;
    });
    return;
}
//-------------------------------------------------------------------------------------------------------
function min(arr){
    let min;
    for(i = 0; i < arr.length ; i++ ){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return;
}

//------------------------------------------------------------------------------------------------------
function max(arr){
    for(i = 0; i < arr.length ; i++ ){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return;
}