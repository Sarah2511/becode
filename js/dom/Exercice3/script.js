//ex 3.1
let NombreParticipant = parseInt(prompt('Entrez le nombre de participant : '));

for(let i = 0; NombreParticipant > i ; i++){
    let sections = document.createElement("section");
    article = document.querySelector("article");
    article.appendChild(sections);
    let section =getRandomValue();
    console.log(sections);
    
    let p = document.createElement("p");
    sections.appendChild(p);
    sections.style.background = "rgb("+getRandomValue()+ "," +getRandomValue()+ "," +getRandomValue()+")" 
    if (NombreParticipant != i){
        p.innerHTML = prompt("Enregistrer le nom d'un participant");
    }
}


//-----------------------------------------------------------------------------------------------------------------
// Fonction pour générer une valeur aléatoire entre 0 et 255
function getRandomValue() {
    return Math.floor(Math.random() * 256);
}