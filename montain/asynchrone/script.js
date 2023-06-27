const body = document.querySelector("body");
const ul = document.createElement("ul");
body.appendChild(ul);
document.querySelector("#button").onclick = function(){ 
    fetch("becode.json").then(response => response.json()).then(data => {
        data.forEach(ligne => {
            let li = document.createElement("li");
            li.innerHTML = ligne;
            ul.appendChild(li);
            console.log(ligne);
        });
    })
};
