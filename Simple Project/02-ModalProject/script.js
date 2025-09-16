const btnElement = document.querySelector("#openModal");
const modalElement = document.querySelector(".modal");
const modalContentElement = modalElement.querySelector(".modal_content");

btnElement.addEventListener('click', () => {
    modalElement.classList.add("open");
});

modalContentElement.addEventListener("click", function(){
    modalElement.classList.remove("open");
});