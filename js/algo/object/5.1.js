const readlineSync = require("readline-sync");


//alert(JSON.stringify(askTvSerie()));
console.log(askTvSerie());

//-------------------------------------------------------------------------

function askTvSerie(){
    let n = readlineSync.question('Combien de série aimez vous ? ');
    for(i = 0; i < n; i++){
    let serie = [
        {NameSerie : readlineSync.question('Quel est le nom de votre série ? ')},
        {ProductionYear : readlineSync.question('Quel est l année de production de votre série ? ')},
        {nMembre : readlineSync.question('De combien de membres se compose le casting de votre série ? ')}
    ]
    }
}
