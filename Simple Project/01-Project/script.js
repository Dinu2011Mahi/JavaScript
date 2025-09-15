const btnElement = document.querySelector("button");
const spanElement = document.querySelector("span");

btnElement.addEventListener("click", function(){
    let userName = prompt("Please Enter Your Name: "); // Prompt is a univeral function that work in all the browser. It help to get Data from user
    spanElement.textContent = userName;
})