const x = document.querySelector(".burger");

x.addEventListener("click", myFunction);

function myFunction() {
    const element = document.querySelector(".menu");
    element.classList.toggle("open");

    x.classList.toggle("change");
}