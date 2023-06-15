let important = document.querySelectorAll(".important");
let images = document.querySelectorAll('img');
let paragraphs = document.querySelectorAll('p');
let allParagraphs = document.getElementsByTagName('p');

// Ajouter une un attribut title a une class (ex 2.1)
for (const items of important) {
    items.title = 'Ceci est important';
}

// Parcourir les images en boucle (ex 2.2)
for (var i = 0; i < images.length; i++) {
    var image = images[i];

    if (!image.classList.contains('important')) {
    image.style.display = 'none';
    }
}

// Parcourir les paragraphes en boucle (ex 2.3)
for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];

    console.log('Contenu du paragraphe:', paragraph.textContent);

    if (paragraph.classList.length > 0) {
    console.log('Nom de classe:', paragraph.classList[0]);
    }
}
    for (var i = 0; i < allParagraphs.length; i++) {
        var paragraph = allParagraphs[i];

        if (paragraph.classList.length === 0) {
        // Générer une couleur de texte aléatoire au format RGB
        var randomColor = 'rgb(' + getRandomValue() + ',' + getRandomValue() + ',' + getRandomValue() + ')';
        
        paragraph.style.color = randomColor;
        }

        console.log('Contenu du paragraphe:', paragraph.textContent);

        if (paragraph.classList.length > 0) {
        console.log('Nom de classe:', paragraph.classList[0]);
        }
    }
//-----------------------------------------------------------------------------------------------------------------
// Fonction pour générer une valeur aléatoire entre 0 et 255
function getRandomValue() {
  return Math.floor(Math.random() * 256);
}

console.log(important);
console.log(images);
console.log(paragraph);

