// about header section view Selector
const viewSelector = document.querySelector(".view-selector");
const viewSelectorDropMenu = document.querySelector(".view-selector-drop-menu");
const navContents = document.querySelector(".nav-content-section");
const fullScreenButton = document.querySelector(".full-screen-button");

// about controller resize font selector
const resizeFont = document.querySelector(".font-resize");
const resizeFontSelector = document.querySelector(".font-resize-selector");

function displayviewSelector() {
    viewSelectorDropMenu.classList.toggle("hidden");
    navContents.classList.toggle("hidden");
    fullScreenButton.classList.toggle("hidden");
}

function displayFontResizeSection() {
    resizeFontSelector.classList.toggle("hidden");
}

viewSelector.addEventListener("click", displayviewSelector);
resizeFont.addEventListener("click", displayFontResizeSection);
