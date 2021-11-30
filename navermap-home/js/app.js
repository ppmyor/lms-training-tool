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
page1 =
    "이번 실습에서는 자주 방문하는 장소를 지도 앱에 등록하겠습니다. 네이버 지도 앱을 실행해 주세요. 화면을 눌러서, 다음으로 진행해 주세요.";
page2 =
    "지도 앱의 홈 화면입니다. 지도 서비스에서 장소 즐겨찾기를 이용하면, 집, 회사, 병원 등의 자주 방문하는 장소를 매번 검색하지 않고, 클릭 한 번에 목적지로 설정할 수 있습니다. 검색창 오른쪽에 파란색 길 찾기 버튼을 클릭해 주세요.";
page3 =
    "길 찾기 버튼을 클릭하면, 출발지와 도착지를 입력하거나 이동 수단을 선택해서 목적지까지 경로를 검색할 수 있습니다. 참고로 출발지에는 현재 나의 위치가 자동으로 등록되어 있습니다. 이제 자주 방문하는 장소 등록을 위해서 집과 회사 버튼 오른쪽에 화살표 버튼을 눌러주세요.";
page4 =
    "즐겨 찾는 장소 화면에서는 집과 회사/학교가 기본 항목으로 등록되어 있고, 추가로 다른 유형의 자주 가는 장소를 등록할 수 있는 버튼이 있습니다. 먼저 집 설정을 위해 집 버튼을 눌러주세요.";
page5 =
    "장소 이름을 집이 아닌 다른 명칭으로 변경할 수 있습니다. 실습에서는 집으로 유지하겠습니다. 장소를 지정해 주세요 우측에 더하기 버튼을 클릭해서 집에 해당하는 장소를 지정할 수 있습니다.더하기 버튼을 클릭해 주세요.";
page6 =
    "집으로 등록할 장소를 지정하겠습니다. 검색창에 집으로 등록할 장소의 주소나 명칭을 검색해서 등록하겠습니다. 실습에서는 서울디지털재단을 집으로 설정하겠습니다. 검색창에 서울디지털재단을 입력하고 엔터 또는 확인을 눌러주세요.";
page7 =
    "검색된 목록에서 원하는 장소가 있다면 선택해 주세요. 주소를 보니 세 번째 결과가 찾고 있는 결과입니다. 세 번째 검색 된 서울디지털재단을 눌러서 선택해 주세요.";
page8 =
    "서울디지털재단으로 장소가 지정되었습니다. 화면 하단 저장 버튼을 누르면 등록이 완료됩니다. 파란색 저장 버튼을 눌러 집 등록을 완료해 주세요.";
page9 =
    "집에는 서울디지털재단이 동록 되었습니다. 이어서 자주 방문하는 병원을 등록해 보겠습니다. 자주 가는 장소에서 등록 버튼을 클릭해 주세요,";
page10 =
    "저장할 장소의 별명을 병원으로 입력하겠습니다. 별명을 입력해 주세요 부분을 눌러서 병원을 입력하고 엔터 또는 확인을 눌러주세요.";
page11 =
    "장소의 별명이 병원으로 입력되었습니다. 장소를 찾아서 병원에 등록하겠습니다. 장소 지정을 위해 우측에 더하기 버튼을 눌러주세요.";
page12 =
    "검색창에 집으로 등록할 장소의 주소나 명칭을 검색해서 등록하겠습니다. 실습에서는 국립중앙의료원을 설정하겠습니다. 상단 검색창에 국립중앙의료원을 입력하고 엔터 또는 확인을 눌러주세요.";
page13 =
    "검색된 목록에서 원하는 장소가 있다면 선택해 주세요. 주소를 보니 네 번째 결과가 찾고 있는 결과입니다. 네 번째 검색 된 국립중앙의료원을 눌러서 선택해 주세요.";
page14 =
    "병원에는 국립중앙의료원으로 장소가 지정되었습니다. 화면 하단 저장 버튼을 누르면 등록이 완료됩니다. 파란색 저장 버튼을 눌러 집 등록을 완료해 주세요.";
page15 =
    "집과 병원 등록이 완료되었습니다. 이제, 자주 방문하는 장소를 활용해서, 경로를 손쉽게 검색하기 위해 화면 상단 좌측에 뒤로 가기 화살표 버튼을 눌러주세요.";
page16 =
    "현재 출발지는, 서울 디지털재단으로 지정되어 있습니다. 검색 과정 없이 도착지를 국립중앙의료원으로 선택하겠습니다. 검색창 아래 병원 버튼을 눌러주세요.";
page17 =
    "도착지에 국립중앙의료원이 등록되고 경로 검색까지 완료되었습니다. 이제 네이버 지도 앱에 여러분이 자주 방문하는 장소를 등록하고, 간편하게 길을 찾아보세요. 이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";
pageDescArray.push(
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
    page11,
    page12,
    page13,
    page14,
    page15,
    page16,
    page17
);

// Asset
const pageNum = 17;
const pageName = "SD13";
const contentImage = [];
const audioArray = [];
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

// user input answer
let pageVariable = 0;
let isInput = false;
let userInputValue = "";

const inputPage = [
    { page: 5, correctAnswer: "서울디지털재단" },
    {
        page: 9,
        correctAnswer: "병원",
    },
    {
        page: 11,
        correctAnswer: "국립중앙의료원",
    },
];

// 좌표
const coordinateArray = [];
coordinate1 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

coordinate2 = {
    startRateX: 0.8073654390934845,
    startRateY: 0.016793893129770993,
    endRateX: 0.9546742209631728,
    endRateY: 0.0916030534351145,
};

coordinate3 = {
    startRateX: 0.49575070821529743,
    startRateY: 0.300763358778626,
    endRateX: 0.3654390934844193,
    endRateY: 0.216793893129771,
};

coordinate4 = {
    startRateX: 0.0028328611898017,
    startRateY: 0.10229007633587786,
    endRateX: 1,
    endRateY: 0.19541984732824427,
};

coordinate5 = {
    startRateX: 0.8101983002832861,
    startRateY: 0.20458015267175572,
    endRateX: 0.9518413597733711,
    endRateY: 0.27938931297709924,
};

coordinate6 = {
    startRateX: 0.12181303116147309,
    startRateY: 0,
    endRateX: 0.8668555240793201,
    endRateY: 0.0717557251908397,
};

coordinate7 = {
    startRateX: 0.0056657223796034,
    startRateY: 0.3053435114503817,
    endRateX: 0.9971671388101983,
    endRateY: 0.41374045801526715,
};

coordinate8 = {
    startRateX: 0.9688385269121813,
    startRateY: 0.983206106870229,
    endRateX: 0.031161473087818695,
    endRateY: 0.9145038167938931,
};

coordinate9 = {
    startRateX: 0.9915014164305949,
    startRateY: 0.48244274809160304,
    endRateX: 0,
    endRateY: 0.39083969465648855,
};

coordinate10 = {
    startRateX: 0.15864022662889518,
    startRateY: 0.1282442748091603,
    endRateX: 0.9518413597733711,
    endRateY: 0.183206106870229,
};

coordinate11 = {
    startRateX: 0.8130311614730878,
    startRateY: 0.20305343511450383,
    endRateX: 0.9546742209631728,
    endRateY: 0.27633587786259545,
};

coordinate12 = {
    startRateX: 0.12181303116147309,
    startRateY: 0,
    endRateX: 0.8668555240793201,
    endRateY: 0.0717557251908397,
};

coordinate13 = {
    startRateX: 0.0056657223796034,
    startRateY: 0.3755725190839695,
    endRateX: 0.9915014164305949,
    endRateY: 0.5206106870229008,
};

coordinate14 = {
    startRateX: 0.0339943342776204,
    startRateY: 0.9145038167938931,
    endRateX: 0.9688385269121813,
    endRateY: 0.983206106870229,
};

coordinate15 = {
    startRateX: 0.141643059490085,
    startRateY: 0.00916030534351145,
    endRateX: 0.0084985835694051,
    endRateY: 0.08854961832061069,
};

coordinate16 = {
    startRateX: 0.5694050991501416,
    startRateY: 0.29923664122137406,
    endRateX: 0.37960339943342775,
    endRateY: 0.21374045801526717,
};

coordinate17 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

coordinateArray.push(
    coordinate1,
    coordinate2,
    coordinate3,
    coordinate4,
    coordinate5,
    coordinate6,
    coordinate7,
    coordinate8,
    coordinate9,
    coordinate10,
    coordinate11,
    coordinate12,
    coordinate13,
    coordinate14,
    coordinate15,
    coordinate16,
    coordinate17
);

let imageWidth;
let imageHeight;

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
