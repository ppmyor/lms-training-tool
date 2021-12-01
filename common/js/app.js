// 콘텐츠 연동
// var JS = document.createElement("script");
// JS.type = "text/javascript";
// JS.charset = "UTF-8";
// JS.src = "/common/js/content_tracking.js";
// document.getElementsByTagName("head")[0].appendChild(JS);

// Audio Section
const pauseButton = document.querySelector(".pause-button");
const playButton = document.querySelector(".play-button");
const mobilePlayButton = document.querySelector(".mobile-play-button");
const mobilePauseButton = document.querySelector(".mobile-pause-button");

// Contents Description Section
const pageDescription = document.querySelector(".content-desc");
const pageDescArray = [];

// Asset
const contentImage = [];
const audioArray = [];

// user input answer
let pageVariable = 0;
let isInput = false;
let userInputValue = "";

// 좌표
const coordinateArray = [];

let imageWidth;
let imageHeight;

// Page Section
const pageArray = ["../common/content-1.html"];

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

const practiceArea = document.querySelector(".practice-section");
const practiceClickArea = document.querySelector(".click-area");

const mainDesc = document.querySelector(".main-desc");

const navHeader = document.querySelector(".nav-header");
const fullScreenButton = document.querySelector(".full-screen-button");

const fontResizeSmall = document.querySelector(".small");
const fontResizeMedium = document.querySelector(".medium");
const fontResizeLarge = document.querySelector(".large");

const clickButton = document.createElement("button");
clickButton.className = "click-button";
let isClick = false;

const hintButton = document.querySelector(".hint-button");
const mobileHintButton = document.querySelector(".mobile-hint-button");

const HIDDEN_CLASSNAME = "hidden";
const HIDDEN_MOBILE_CLASSNAME = "mobile-hidden";

const RETRY_MESSAGE = "다시 생각해보세요!";

window.addEventListener("resize", function () {
    console.log("resize");
    imageWidth = document.querySelector(".bg-image").clientWidth;
    imageHeight = document.querySelector(".bg-image").clientHeight;
    buttonPositionCalcurate(coordinateArray[pageVariable]);
    for (i = 0; i < inputPage.length; i++) {
        if (pageVariable === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageVariable]);
        }
    }
});

window.addEventListener("load", function () {
    imageWidth = document.querySelector(".bg-image").clientWidth;
    imageHeight = document.querySelector(".bg-image").clientHeight;
    setTimeout(scrollTo, 0, 0, 1);
});

// About Move Page
// Index 의 시작 버튼 기능 구현
goToMainPage.addEventListener("click", function () {
    goToMain(pageVariable);
    showDescriptionText(pageVariable);
});

// 처음 단계, 이전 단계, 다음 단계 버튼 기능 구현
// 처음 단계 버튼 기능 구현
goToIndexPage.addEventListener("click", function () {
    goToIndex(pageVariable);
    loadBackgroundImage(pageVariable);
});

mobileGoToIndexPage.addEventListener("click", function () {
    goToIndex(pageVariable);
});

// 다음 단계 버튼 기능 구현
goToNextPage.addEventListener("click", function () {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        goToNext(pageVariable);
        showDescriptionText(pageVariable);
    } else {
        console.log("last page");
        pageVariable = contentImage.length - 1;
        console.log(pageVariable);
    }
});

mobileGoToNextPage.addEventListener("click", function () {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        goToNext(pageVariable);
    } else {
        console.log("last page");
        pageVariable = contentImage.length - 1;
        console.log(pageVariable);
    }
});

clickButton.addEventListener("click", function () {
    isClick = true;
});

practiceClickArea.addEventListener("click", function () {
    if (isClick === true) {
        handleClickBox();
        isClick = false;
    } else if (document.querySelector(".click-button") === null) {
        return;
    } else {
        alert(RETRY_MESSAGE);
    }
});

// 이전 단계 버튼 기능 구현
goToPreviousPage.addEventListener("click", function () {
    pageVariable--;
    if (pageVariable >= 0) {
        goToPrevious(pageVariable);
        showDescriptionText(pageVariable);
    } else {
        console.log("first page");
        pageVariable = 0;
        console.log(pageVariable);
    }
});

mobileGoToPreviousPage.addEventListener("click", function () {
    pageVariable--;
    if (pageVariable >= 0) {
        goToPrevious(pageVariable);
    } else {
        console.log("first page");
        pageVariable = 0;
        console.log(pageVariable);
    }
});

// About hint button
hintButton.addEventListener("click", function () {
    document.querySelector(".click-button").style.backgroundColor = "rgba(200, 150, 150, 0.5)";
});

// About mobile hint button
mobileHintButton.addEventListener("click", function () {
    document.querySelector(".click-button").style.backgroundColor = "rgba(200, 150, 150, 0.5)";
});

// About Audio AutoPlay
pauseButton.addEventListener("click", function () {
    audioArray[pageVariable].pause();
});

playButton.addEventListener("click", function () {
    audioArray[pageVariable].play();
});

// Mobile Audio AutoPlay

mobilePlayButton.addEventListener("click", function () {
    audioArray[pageVariable].load();
    audioArray[pageVariable].play();
});

mobilePauseButton.addEventListener("click", function () {
    audioArray[pageVariable].pause();
});

// handle local Storage function
function handleLocalStorage(pageNumber) {
    localStorage.setItem("pageNumber", pageNumber);
}

// handle load background image
function loadBackgroundImage(pageNumber) {
    if (document.querySelector(".bg-image") !== null) {
        practiceClickArea.removeChild(practiceClickArea.querySelector(".bg-image"));
    }
    let backgroundImage = document.createElement("img");
    backgroundImage.className = "bg-image";
    backgroundImage.src = contentImage[pageNumber];
    practiceClickArea.appendChild(backgroundImage);
}

function goToMain(pageNumber) {
    if (pageNumber === 0) {
        workingArea.src = pageArray[0];
        audioArray[pageNumber].load();
        audioArray[pageNumber].play();
        loadBackgroundImage(pageNumber);
        buttonPositionCalcurate(coordinateArray[pageNumber]);
        handleInput(pageNumber);
        console.log(pageNumber);
    } else {
        console.log("done");
    }
}

function goToIndex(pageNumber) {
    pageVariable = 0;
    const previousPageNumber = parseInt(localStorage.getItem("pageNumber"));
    audioArray[previousPageNumber].pause();
    handleLocalStorage(pageNumber);
    workingArea.src = pageArray[0];
}

function goToNext(pageNumber) {
    imageWidth = document.querySelector(".bg-image").clientWidth;
    imageHeight = document.querySelector(".bg-image").clientHeight;
    handleLocalStorage(pageNumber);
    workingArea.src = pageArray[0];
    audioArray[pageNumber].load();
    audioArray[pageNumber].play();
    audioArray[pageNumber - 1].pause();
    loadBackgroundImage(pageNumber);
    buttonPositionCalcurate(coordinateArray[pageNumber]);
    handleInput(pageNumber);
    console.log(pageNumber);
}

function goToPrevious(pageNumber) {
    handleLocalStorage(pageNumber);
    workingArea.src = pageArray[0];
    audioArray[pageNumber].load();
    audioArray[pageNumber].play();
    audioArray[pageNumber + 1].pause();
    loadBackgroundImage(pageNumber);
    buttonPositionCalcurate(coordinateArray[pageNumber]);
    handleInput(pageNumber);
    console.log(pageNumber);
}

function showDescriptionText(pageNumber) {
    pageDescription.innerText = pageDescArray[pageNumber];
}

function handleClickBox() {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        goToNext(pageVariable);
        showDescriptionText(pageVariable);
    } else {
        console.log("last page");
        pageVariable = contentImage.length - 1;
        console.log(pageVariable);
    }
}

// handle Click Button
function buttonPositionCalcurate(coordinate) {
    let nowX;
    let nowY;
    let nowWidth;
    let nowHeight;

    if (document.querySelector(".click-button") !== null) {
        deleteButton();
    }
    if (coordinate.startRateX < coordinate.endRateX && coordinate.startRateY < coordinate.endRateY) {
        nowX = coordinate.startRateX * imageWidth;
        nowY = coordinate.startRateY * imageHeight;
        nowWidth = coordinate.endRateX * imageWidth - nowX;
        nowHeight = coordinate.endRateY * imageHeight - nowY;
        console.log(nowX, nowY, nowWidth, nowHeight);
    } else if (coordinate.startRateX > coordinate.endRateX && coordinate.startRateY < coordinate.endRateY) {
        nowX = coordinate.endRateX * imageWidth;
        nowY = coordinate.startRateY * imageHeight;
        nowWidth = coordinate.startRateX * imageWidth - nowX;
        nowHeight = coordinate.endRateY * imageHeight - nowY;
        console.log(nowX, nowY, nowWidth, nowHeight);
    } else if (coordinate.startRateX > coordinate.endRateX && coordinate.startRateY > coordinate.endRateY) {
        nowX = coordinate.endRateX * imageWidth;
        nowY = coordinate.endRateY * imageHeight;
        nowWidth = coordinate.startRateX * imageWidth - nowX;
        nowHeight = coordinate.startRateY * imageHeight - nowY;
        console.log(nowX, nowY, nowWidth, nowHeight);
    } else {
        nowX = coordinate.startRateX * imageWidth;
        nowY = coordinate.endRateY * imageHeight;
        nowWidth = coordinate.endRateX * imageWidth - nowX;
        nowHeight = coordinate.startRateY * imageHeight - nowY;
        console.log(nowX, nowY, nowWidth, nowHeight);
    }
    createButton(nowX, nowY, nowWidth, nowHeight);
}

function positionCalcurate(coordinate) {
    if (coordinate.startRateX < coordinate.endRateX && coordinate.startRateY < coordinate.endRateY) {
        nowX = coordinate.startRateX * imageWidth;
        nowY = coordinate.startRateY * imageHeight;
        endX = coordinate.endRateX * imageWidth;
        endY = coordinate.endRateY * imageHeight;
        nowWidth = endX - nowX;
        nowHeight = endY - nowY;
        console.log(nowX, nowY, nowWidth, nowHeight);
    } else if (coordinate.startRateX > coordinate.endRateX && coordinate.startRateY < coordinate.endRateY) {
        nowX = coordinate.endRateX * imageWidth;
        nowY = coordinate.startRateY * imageHeight;
        endX = coordinate.startRateX * imageWidth;
        endY = coordinate.endRateY * imageHeight;
        nowWidth = endX - nowX;
        nowHeight = endY - nowY;
        console.log(nowX, nowY, nowWidth, nowHeight);
    } else if (coordinate.startRateX > coordinate.endRateX && coordinate.startRateY > coordinate.endRateY) {
        nowX = coordinate.endRateX * imageWidth;
        nowY = coordinate.endRateY * imageHeight;
        endX = coordinate.startRateX * imageWidth;
        endY = coordinate.startRateY * imageHeight;
        nowWidth = endX - nowX;
        nowHeight = endY - nowY;
        console.log(nowX, nowY, nowWidth, nowHeight);
    } else {
        nowX = coordinate.startRateX * imageWidth;
        nowY = coordinate.endRateY * imageHeight;
        endX = coordinate.endRateX * imageWidth;
        endY = coordinate.startRateY * imageHeight;
        nowWidth = endX - nowX;
        nowHeight = endY - nowY;
        console.log(nowX, nowY, nowWidth, nowHeight);
    }
}

function createButton(currentX, currentY, currentWidth, currentHeight) {
    clickButton.style.position = "absolute";
    clickButton.style.left = currentX + "px";
    clickButton.style.top = currentY + "px";
    clickButton.style.width = currentWidth + "px";
    clickButton.style.height = currentHeight + "px";
    clickButton.style.backgroundColor = "transparent";
    practiceClickArea.appendChild(clickButton);
}

function deleteButton() {
    practiceClickArea.removeChild(practiceClickArea.querySelector(".click-button"));
}

// Draw user Input box
function DrawInputBox(coordinate) {
    if (document.querySelector(".input-answer") !== null) {
        deleteInputBox();
    }

    positionCalcurate(coordinate);
    createInput(nowX, nowY, nowWidth, nowHeight);
    practiceClickArea.removeChild(document.querySelector(".click-button"));
}

function createInput(currentX, currentY, currentWidth, currentHeight) {
    const inputAnswer = document.createElement("input");
    inputAnswer.className += "input-answer";
    inputAnswer.type = "text";
    inputAnswer.style.position = "absolute";
    inputAnswer.style.left = currentX + "px";
    inputAnswer.style.top = currentY + "px";
    console.log(inputAnswer.style.left, inputAnswer.style.top);
    inputAnswer.style.width = currentWidth + "px";
    inputAnswer.style.height = currentHeight + "px";
    practiceClickArea.appendChild(inputAnswer);
}

function deleteInputBox() {
    practiceClickArea.removeChild(practiceClickArea.querySelector(".input-answer"));
}

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    if (this.value === answer) {
                        handleClickBox();
                    } else if (this.value !== answer) {
                        alert(RETRY_MESSAGE);
                    }
                }
            });
        } else if (document.querySelector(".input-answer") !== null && pageNumber === inputPage[i].page - 1) {
            practiceClickArea.removeChild(document.querySelector(".input-answer"));
        } else if (document.querySelector(".input-answer") !== null && pageNumber === inputPage[i].page + 1) {
            practiceClickArea.removeChild(document.querySelector(".input-answer"));
        }
    }
}

function checkInputAnswer(pageNumber) {
    if (inputPage[pageNumber].correctAnswer === userInputValue) {
        console.log("correct");
    } else if (inputPage[pageNumber].correctAnswer !== userInputValue) {
        alert("wrong");
    } else {
        return;
    }
}