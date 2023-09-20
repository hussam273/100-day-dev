const inputElement = document.querySelector("input");
const pElement = document.querySelector("p");
function displayNumber(e){
  const number = e.target.value.length;
  pElement.textContent = `${60-number}/60`;
}
inputElement.addEventListener("input",displayNumber);