let tittle = document.body.children[0];
let webBody = tittle.parentElement;
let webP = tittle.nextElementSibling;

tittle = document.getElementById("web-head");
webP = document.querySelector("p");
webP.textContent = "hi there how r u?";

// creat new element
let newP = document.createElement("p");
newP.textContent = "hello im inserted element";
webBody = document.querySelector("body");
webBody.append(newP);
