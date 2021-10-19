const indexNavContent = document.querySelector(".nav-index-contents");
const MainNavContent = document.querySelector(".nav-main-contents");
const goMainPageBtn = document.getElementById("go-main-page");

const navSection = document.querySelector(".nav-section");

goMainPageBtn.addEventListener("click", function () {
    indexNavContent.classList.toggle("hidden");
    MainNavContent.classList.toggle("hidden");
});
