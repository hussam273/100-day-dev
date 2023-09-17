let pElement = document.querySelector("p");
let inputElement = document.querySelector("input");
function changePText() {
  pElement.textContent = "clicked!";
}

function inputWrite(event){
  console.log(event.target.value);
  console.log(event);
}
inputElement.addEventListener("input",inputWrite);
pElement.addEventListener("click",changePText);