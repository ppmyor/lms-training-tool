// Audio Section
const pauseButton = document.querySelector(".pause-button");
const playButton = document.querySelector(".play-button");
const volumeUpButton = document.querySelector(".volume-up");
const volumeDownButton = document.querySelector(".volume-down");
const audio = new Audio("./assets/ex-audio.wav");

let pageVariable = 0;
let volumeVariable = 0.5;

// Page Section
const pageArray = ["./content-1.html", "./content-2.html"];

const workingArea = document.getElementById("working-space");
const goToMainPage = document.querySelector(".next-page-btn");
const goToIndexPage = document.querySelector(".go-home");
const goToNextPage = document.querySelector(".next");
const goToPreviousPage = document.querySelector(".previous");

const indexNav = document.querySelector(".nav-index-contents");
const MainNav = document.querySelector(".nav-main-contents");

goToMainPage.addEventListener("click", function () {
    if (pageVariable === 0) {
        workingArea.src = pageArray[pageVariable];
        audio.volume = volumeVariable;
        audio.play();
        audio.autoplay;
    } else {
        console.log("done");
    }
});

goToIndexPage.addEventListener("click", function () {
    pageVariable = 0;
    workingArea.src = pageArray[pageVariable];
    indexNav.classList.toggle("hidden");
    MainNav.classList.toggle("hidden");
});

goToNextPage.addEventListener("click", function () {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < pageArray.length) {
        workingArea.src = pageArray[pageVariable];
        audio.volume = volumeVariable;
        audio.play();
        audio.autoplay;
        console.log(pageVariable);
    } else {
        console.log("last page");
        pageVariable = pageArray.length - 1;
        console.log(pageVariable);
    }
});

goToPreviousPage.addEventListener("click", function () {
    pageVariable--;
    if (pageVariable >= 0) {
        workingArea.src = pageArray[pageVariable];
        audio.volume = volumeVariable;
        audio.play();
        audio.autoplay;
        console.log(pageVariable);
    } else {
        console.log("first page");
        pageVariable = 0;
        console.log(pageVariable);
    }
});

pauseButton.addEventListener("click", function () {
    audio.pause();
});

playButton.addEventListener("click", function () {
    audio.play();
});

volumeUpButton.addEventListener("click", function () {
    volumeVariable = volumeVariable + 0.1;
    if (volumeVariable < 1.0) {
        audio.volume = volumeVariable;
        console.log(volumeVariable);
    } else {
        console.log("maxVolume");
    }
});

volumeDownButton.addEventListener("click", function () {
    volumeVariable = volumeVariable - 0.1;
    if (volumeVariable > 0) {
        audio.volume = volumeVariable;
        console.log(volumeVariable);
    } else {
        console.log("minVolume");
    }
});
