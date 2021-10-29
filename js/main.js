// Audio Section
const pauseButton = document.querySelector(".pause-button");
const playButton = document.querySelector(".play-button");
const volumeUpButton = document.querySelector(".volume-up");
const volumeDownButton = document.querySelector(".volume-down");
const mobilePlayButton = document.querySelector(".mobile-play-button");
const mobilePauseButton = document.querySelector(".mobile-pause-button");

// Click Area Section
// working area 에서 click box 이외의 위치
const practiceClickArea = document.querySelector(".click-area");
const contentImage = ["./assets/bus-ex.png", "./assets/bus-ex2.png", "./assets/bus-ex3.png"];

// click box 위치 조정
const clickBox = document.querySelector(".correct-click");

const wrongClickBox = document.querySelector(".wrong-click-area");

let pageVariable = 0;
let volumeVariable = 0.5;

// Audio Assets
const audioArray = [];
audio1 = new Audio("./assets/ex-audio.wav");
audio2 = new Audio("./assets/ex-audio2.wav");
audio3 = new Audio("./assets/ex-audio3.wav");
audioArray.push(audio1, audio2, audio3);

// Page Section
const pageArray = ["./content-1.html"];

const workingArea = document.getElementById("working-space");
const goToMainPage = document.querySelector("#go-main-page");
const goToIndexPage = document.querySelector(".go-home");
const goToNextPage = document.querySelector(".next");
const goToPreviousPage = document.querySelector(".previous");

const mobileGoToIndexPage = document.querySelector(".mobile-go-home");
const mobileGoToNextPage = document.querySelector(".mobile-next");
const mobileGoToPreviousPage = document.querySelector(".mobile-previous");

const indexNav = document.querySelector(".nav-index-contents");
const MainNav = document.querySelector(".nav-main-contents");

// page progress bar
let i = 0;
const pageProgressBar = document.querySelector(".page-progress-bar");

// handle local Storage function
function handleLocalStorage(pageIndex) {
    localStorage.setItem("pageNumber", pageIndex);
}

// handle Create Image
function handleCreateImage(pageIndex) {
    // 기존의 이미지 태그 삭제
    const currentContentImage = practiceClickArea.querySelector("img");
    practiceClickArea.removeChild(currentContentImage);

    // 새로운 이미지 태그 생성
    const createImage = document.createElement("img");
    createImage.src = contentImage[pageIndex];
    practiceClickArea.appendChild(createImage);
}

function handleCreateClickBox(pageIndex) {
    clickBox.classList.add("page-" + pageIndex);
}

function handleRemoveNextClickBox(pageIndex) {
    previousIndex = pageIndex - 1;
    clickBox.classList.remove("page-" + previousIndex);
}

function handleRemovePreviousClickBox(pageIndex) {
    nextIndex = pageIndex + 1;
    clickBox.classList.remove("page-" + nextIndex);
}

// About Move Page
// Index 의 시작 버튼 기능 구현
goToMainPage.addEventListener("click", function () {
    if (pageVariable === 0) {
        pageProgressBar.firstChild.id = "page-progress-bar-select";
        workingArea.src = pageArray[0];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        handleCreateImage(pageVariable);
        clickBox.classList.remove("hidden");
        handleCreateClickBox(pageVariable);
        console.log(pageVariable);
    } else {
        console.log("done");
    }
});

// Page Progress bar
for (i = 0; i < contentImage.length; i++) {
    const pageProgressElement = document.createElement("span");
    pageProgressBar.appendChild(pageProgressElement);
}

// handle selected page Progress
function handleSelectedPage(pageCount) {
    for (j = 0; j < pageCount; j++) {
        pageProgressBar.childNodes[j].id = "";
    }
}

// 처음 단계, 이전 단계, 다음 단계 버튼 기능 구현
// 처음 단계 버튼 기능 구현
goToIndexPage.addEventListener("click", function () {
    pageVariable = 0;
    const previousPageNumber = parseInt(localStorage.getItem("pageNumber"));
    audioArray[previousPageNumber].pause();
    handleLocalStorage(pageVariable);
    workingArea.src = pageArray[0];
    indexNav.classList.toggle("hidden");
    MainNav.classList.toggle("hidden");
    // MOBILE
    mainDesc.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    practiceArea.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    navHeader.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    // class reset
    clickBox.className = "";
    clickBox.classList.add("correct-click");
    clickBox.classList.add("hidden");
    handleSelectedPage(i);
});

mobileGoToIndexPage.addEventListener("click", function () {
    pageVariable = 0;
    const previousPageNumber = parseInt(localStorage.getItem("pageNumber"));
    audioArray[previousPageNumber].pause();
    handleLocalStorage(pageVariable);
    workingArea.src = pageArray[0];
    indexNav.classList.toggle("hidden");
    MainNav.classList.toggle("hidden");
    // MOBILE
    mainDesc.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    practiceArea.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    navHeader.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    // class reset
    clickBox.className = "";
    clickBox.classList.add("correct-click");
    clickBox.classList.add("hidden");
    handleSelectedPage(i);
});

// 다음 단계 버튼 기능 구현
goToNextPage.addEventListener("click", function () {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        handleLocalStorage(pageVariable);
        pageProgressBar.childNodes[pageVariable].id = "page-progress-bar-select";
        workingArea.src = pageArray[0];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable - 1].pause();
        handleCreateImage(pageVariable);
        handleCreateClickBox(pageVariable);
        handleRemoveNextClickBox(pageVariable);
        console.log(pageVariable);
    } else {
        console.log("last page");
        pageVariable = contentImage.length - 1;
        console.log(pageVariable);
    }
});

mobileGoToNextPage.addEventListener("click", function () {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        handleLocalStorage(pageVariable);
        pageProgressBar.childNodes[pageVariable].id = "page-progress-bar-select";
        workingArea.src = pageArray[0];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable - 1].pause();
        handleCreateImage(pageVariable);
        handleCreateClickBox(pageVariable);
        handleRemoveNextClickBox(pageVariable);
        console.log(pageVariable);
    } else {
        console.log("last page");
        pageVariable = contentImage.length - 1;
        console.log(pageVariable);
    }
});

// click box 클릭 시 다음 단계로 넘어가는 기능 구현
clickBox.addEventListener("click", function () {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        handleLocalStorage(pageVariable);
        pageProgressBar.childNodes[pageVariable].id = "page-progress-bar-select";
        workingArea.src = pageArray[0];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable - 1].pause();
        handleCreateImage(pageVariable);
        handleCreateClickBox(pageVariable);
        handleRemoveNextClickBox(pageVariable);
        console.log(pageVariable);
    } else {
        console.log("last page");
        pageVariable = contentImage.length - 1;
        console.log(pageVariable);
    }
});

wrongClickBox.addEventListener("click", function () {
    wrongClickBox.style.border = "3px solid rgb(117, 119, 255)";
    clickBox.style.backgroundColor = "rgba(117, 119, 255, 0.5)";
    setTimeout(function () {
        wrongClickBox.style.border = "none";
        clickBox.style.backgroundColor = "rgba(255, 107, 107, 0.5)";
    }, 800);
});

// 이전 단계 버튼 기능 구현
goToPreviousPage.addEventListener("click", function () {
    pageVariable--;
    if (pageVariable >= 0) {
        handleLocalStorage(pageVariable);
        pageProgressBar.childNodes[pageVariable + 1].id = "";
        workingArea.src = pageArray[0];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable + 1].pause();
        handleCreateImage(pageVariable);
        handleCreateClickBox(pageVariable);
        handleRemovePreviousClickBox(pageVariable);
        console.log(pageVariable);
    } else {
        console.log("first page");
        pageVariable = 0;
        console.log(pageVariable);
    }
});

mobileGoToPreviousPage.addEventListener("click", function () {
    pageVariable--;
    if (pageVariable >= 0) {
        handleLocalStorage(pageVariable);
        pageProgressBar.childNodes[pageVariable + 1].id = "";
        workingArea.src = pageArray[0];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable + 1].pause();
        handleCreateImage(pageVariable);
        handleCreateClickBox(pageVariable);
        handleRemovePreviousClickBox(pageVariable);
        console.log(pageVariable);
    } else {
        console.log("first page");
        pageVariable = 0;
        console.log(pageVariable);
    }
});

// About Audio AutoPlay
pauseButton.addEventListener("click", function () {
    audioArray[pageVariable].pause();
});

playButton.addEventListener("click", function () {
    audioArray[pageVariable].play();
});

volumeUpButton.addEventListener("click", function () {
    volumeVariable = volumeVariable + 0.1;
    if (volumeVariable < 1.0) {
        audioArray[pageVariable].volume = volumeVariable;
        console.log(volumeVariable);
    } else {
        volumeVariable = 1.0;
        console.log("maxVolume");
    }
});

volumeDownButton.addEventListener("click", function () {
    volumeVariable = volumeVariable - 0.1;
    if (volumeVariable > 0) {
        audioArray[pageVariable].volume = volumeVariable;
        console.log(volumeVariable);
    } else {
        volumeVariable = 0;
        console.log("minVolume");
    }
});

// Mobile

mobilePlayButton.addEventListener("click", function () {
    audioArray[pageVariable].load();
    audioArray[pageVariable].play();
});

mobilePauseButton.addEventListener("click", function () {
    audioArray[pageVariable].pause();
});
