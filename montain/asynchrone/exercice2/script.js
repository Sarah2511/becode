//initialisation de variable
const body = document.querySelector("body");
const div = document.createElement("div");
body.appendChild(div);
const select = document.createElement("select");
select.setAttribute("id","select");
body.appendChild(select);

//création d'un bouton permettant de générer des blague aléatoire à partir de l'url d'une api.
document.querySelector("#button").onclick = function(){ 
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json()).then(data => {
        div.innerHTML = data.value;
        console.log(data.value);
    })
    .catch(error => console.error(error));
};

    fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then((categories) => {
        //creation des options du select à partir de l'url 
        for (let i = 0; i < categories.length; i++) {
            let option = document.createElement("option");
            option.innerText = categories[i];
            select.appendChild(option);
        }
        //on cree une option autre a la fin des autres options
        const option = document.createElement("option");
        option.innerHTML = "autre...";
        select.appendChild(option);

        //on creer un localstorage pour stocker la valeur au click d'une option.
        document.querySelector("#select").onchange = function(e){ 
            let categorie = e.currentTarget.value;
            localStorage.setItem("option",categorie);
            localStorage.getItem("option");
            console.log(categorie);
        }
        
        //on creer un bouton reset pour vider se que contient le local storage creer précédemment.

        document.querySelector("#reset").onclick = function(e){ 
            let categorie = e.currentTarget.value;
            localStorage.removeItem("option");
        }
    })
    .catch(error => console.error(error));
