const body = document.querySelector("body");
const div = document.createElement("div");
body.appendChild(div);
document.querySelector("#button").onclick = function(){ 
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json()).then(data => {
        div.innerHTML = data.value;
        console.log(data.value);
    })
};