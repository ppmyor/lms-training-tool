const indexNavContent = document.querySelector(".nav-index-contents");
const MainNavContent = document.querySelector(".nav-main-contents");
const goMainPageBtn = document.getElementById("go-main-page");

const practiceArea = document.querySelector(".practice-section");
const mainDesc = document.querySelector(".main-desc");
const navHeader = document.querySelector(".nav-header");

const HIDDEN_CLASSNAME = "hidden";
const HIDDEN_MOBILE_CLASSNAME = "mobile-hidden";

goMainPageBtn.addEventListener("click", function () {
    // DESKTOP
    indexNavContent.classList.toggle(HIDDEN_CLASSNAME);
    MainNavContent.classList.toggle(HIDDEN_CLASSNAME);

    // MOBILE
    mainDesc.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    practiceArea.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    navHeader.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
});
