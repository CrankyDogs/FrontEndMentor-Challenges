const adviceID = document.getElementById("num");
const adviceText = document.querySelector(".adviceText");
const generate = document.querySelector("button");
window.onload = showQuote;

generate.addEventListener("click", function(){
    showQuote();});

function showQuote() {
fetch("https://api.adviceslip.com/advice")
   .then(response => response.json())
   .then(data => data.slip)
   .then(data => {
    adviceID.textContent = data.id;
    adviceText.textContent = data.advice;
    console.log(data.advice)
   })
   .catch(error => console.log(error));
}
