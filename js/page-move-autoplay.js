// Audio Section
const pauseButton = document.querySelector(".pause-button");
const playButton = document.querySelector(".play-button");
const volumeUpButton = document.querySelector(".volume-up");
const volumeDownButton = document.querySelector(".volume-down");

let pageVariable = 0;
let volumeVariable = 0.5;

// Audio Assets
const audioArray = [];
audio1 = new Audio("./assets/ex-audio.wav");
audio2 = new Audio("./assets/ex-audio2.wav");
audio3 = new Audio("./assets/ex-audio3.wav");
audioArray.push(audio1, audio2, audio3);

// Page Section
const pageArray = ["./content-1.html", "./content-2.html", "./content-3.html"];

const workingArea = document.getElementById("working-space");
const goToMainPage = document.querySelector(".next-page-btn");
const goToIndexPage = document.querySelector(".go-home");
const goToNextPage = document.querySelector(".next");
const goToPreviousPage = document.querySelector(".previous");

const indexNav = document.querySelector(".nav-index-contents");
const MainNav = document.querySelector(".nav-main-contents");

// page progress bar
let i = 0;
const pageProgressBar = document.querySelector(".page-progress-bar");

// About Move Page
// Index 의 시작 버튼 기능 구현
goToMainPage.addEventListener("click", function () {
    if (pageVariable === 0) {
        pageProgressBar.firstChild.id = "page-progress-bar-select";
        workingArea.src = pageArray[pageVariable];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].play();
        console.log(pageVariable);
    } else {
        console.log("done");
    }
});

// Page Progress bar
for (i = 0; i < pageArray.length; i++) {
    const pageProgressElement = document.createElement("span");
    pageProgressBar.appendChild(pageProgressElement);
}

// 처음 단계, 이전 단계, 다음 단계 버튼 기능 구현
goToIndexPage.addEventListener("click", function () {
    pageVariable = 0;
    workingArea.src = pageArray[pageVariable];
    indexNav.classList.toggle("hidden");
    MainNav.classList.toggle("hidden");
});

goToNextPage.addEventListener("click", function () {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < pageArray.length) {
        pageProgressBar.childNodes[pageVariable].id = "page-progress-bar-select";
        workingArea.src = pageArray[pageVariable];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].play();
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
        pageProgressBar.childNodes[pageVariable + 1].id = "";
        workingArea.src = pageArray[pageVariable];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].play();
        console.log(pageVariable);
    } else {
        console.log("first page");
        pageVariable = 0;
        console.log(pageVariable);
    }
});

// About Audio AutoPlay
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
        volumeVariable = 1.0;
        console.log("maxVolume");
    }
});

volumeDownButton.addEventListener("click", function () {
    volumeVariable = volumeVariable - 0.1;
    if (volumeVariable > 0) {
        audio.volume = volumeVariable;
        console.log(volumeVariable);
    } else {
        volumeVariable = 0;
        console.log("minVolume");
    }
});
