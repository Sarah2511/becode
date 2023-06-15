//ex 1.1
document.title = 'DOM';
console.log(document.title);

//ex 1.2
const body = document.querySelector('body');
const deuxiemeEnfant = body.children[1];

for (const enfant of deuxiemeEnfant.children) {
    console.log(enfant);
}

//ex 1.3
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


