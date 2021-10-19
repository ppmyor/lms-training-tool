// about header section view Selector
const viewSelector = document.querySelector(".view-selector");
const viewSelectorDropMenu = document.querySelector(".view-selector-drop-menu");
const navContents = document.querySelector(".nav-content-section");
const fullScreenButton = document.querySelector(".full-screen-button");

// about controller resize font selector
const resizeFont = document.querySelector(".font-resize");
const resizeFontSelector = document.querySelector(".font-resize-selector");

// about controller volume control bar
const audioControl = document.querySelector(".audio-control");
const audiocontrolSelector = document.querySelector(".audio-control-selector");

function displayViewSelector() {
    viewSelectorDropMenu.classList.toggle("hidden");
    navContents.classList.toggle("hidden");
    fullScreenButton.classList.toggle("hidden");
}

function displayFontResizeSelector() {
    resizeFontSelector.classList.toggle("hidden");
}

function displayAudioControlSelector() {
    audiocontrolSelector.classList.toggle("hidden");
}

viewSelector.addEventListener("click", displayViewSelector);
resizeFont.addEventListener("click", displayFontResizeSelector);
audioControl.addEventListener("click", displayAudioControlSelector);
