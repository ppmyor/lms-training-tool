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
    "지도 서비스를 사용해서 보다 편하고 정확한 길 찾기를 실습하겠습니다. 실습에서 남부터미널 역 3호선에서 서울디지털재단까지 가는 길을 찾아보겠습니다. 화면을 눌러서 다음 페이지로 진행해 주세요.";
page2 =
    "네이버 지도를 최초 실행하면 나오는, 기능과 활용법을 소개하는 튜토리얼 화면입니다. 대중교통 길 찾기 기능 활용을 소개하고 있습니다. 내용을 확인하고, 화면 상단 우측에 화살표를 눌러 다음으로 진행해 주세요.";
page3 =
    "지도 앱 기능 중 내비게이션 기능과 특장점을 소개하는 화면입니다. 화면 상단 우측에 화살표를 눌러 다음으로 진행해 주세요.";
page4 = "이제, 본격적으로 네이버 지도를 시작할 준비가 되었습니다. 화면 하단에, 파란색 시작하기 버튼을 눌러주세요.";
page5 =
    "지도 앱을 사용할 때에는 휴대폰의 위치 정보 GPS를 허용하면 보다 편리한 이용이 가능합니다. 실습에서는 위치정보를 허용하여 지도 앱을 이용하겠습니다. 허용을 눌러주세요.";
page6 =
    "공지, 이벤트 정보 알림 기능은 허용하지 않더라도 지도 서비스 이용에 제한은 없습니다. 실습에서는 허용하지 않겠습니다. 아니요를 눌러주세요.";
page7 =
    "지도 앱의 첫 화면입니다. 화면 상단에 장소, 버스, 지하철 등을 검색할 수 있는 검색창이 있습니다. 길 찾기를 시작하기 위해 검색창 바로 우측 파란색 길 찾기 버튼을 클릭해 주세요.";
page8 =
    "길 찾기 화면에서 출발지와 도착지를 선택한 다음 이동 수단을 선택해서 검색할 수 있습니다. 출발지에 새로운 장소를 등록해 보겠습니다. 출발지 입력 항목을 눌러서 선택해 주세요.";
page9 = "출발지 입력 화면입니다. 출발지 입력란에 남부터미널을 입력하고 엔터 또는 확인을 눌러주세요.";
page10 =
    "실습에서는 추천되는 검색 결과 중에서종합버스터미널이 아닌 지하철역을 선택하겠습니다. 남부터미널 역 3호선을 눌러서 선택해 주세요.";
page11 = "출발지에 남부터미널 역 3호선이 입력되었습니다. 도착지를 입력하겠습니다. 도착지 입력을 눌러주세요.";
page12 = "도착지 입력 화면입니다. 도착지 입력란에 서울디지털재단을 입력하고 엔터 또는 확인을 눌러주세요.";
page13 = "실습에서는 추천되는 검색 결과 중에서 첫 번째 서울디지털재단을 눌러서 선택해 주세요.";
page14 =
    "길 찾기 검색 결과입니다. 도착지 입력창 아래 버스 모양 아이콘은 대중교통을 이용 길 찾기 결과를 보여줍니다. 최적 경로의 예상 소요 시간은 59분이며, 도착 시간, 요금, 그리고 환승도 확인할 수 있습니다. 버스만 이용해서 목적지에 가고 싶을 때 경로를 확인하겠습니다. 파란색 버스 아이콘 아래 전체 버튼 옆 버스 버튼을 눌러주세요..";
page15 =
    "지하철을 이용하지 않고, 버스만 이용해서 도착지로 가는 3개의 경로를 제안하고 있습니다. 이번에는 지하철만 이용해서 목적지에 가고 싶을 때 경로를 확인하겠습니다. 버스 버튼 옆 지하철 버튼을 눌러주세요.";
page16 =
    "버스를 이용하지 않고, 지하철만 이용해서 도착지로 가는 3개의 경로를 제안하고 있습니다. 이번에는 대중교통이 아닌 승용차를 이용한 길 찾기 결과를 살펴보겠습니다. 버스 모양 아이콘 바로 우측 자동차 모양 아이콘을 눌러주세요.";
page17 =
    "자동차로 이동 시 올림픽대로를 이용하는 28분이 소요되는 경로를 추천하고 있습니다. 이번에는 도보로 이동하는 경로를 확인하겠습니다. 자동차 아이콘 바로 우측 사람이 걷는 모양 아이콘을 눌러주세요.";
page18 =
    "도보로는 4시간 58분 소요 예상되고, 거리와 예상 걸음 수를 확인할 수 있습니다. 마지막으로 자전거를 이용한 이동 경로를 확인해 보겠습니다. 자전거 모양 아이콘을 눌러주세요.";
page19 =
    "자전거 이용하여 이동하면 1시간 17분 소요 예상됩니다. 경로 상의 교량과 횡단보도 정보 그리고 경로 미리 보기를 제공합니다. 실습을 마치겠습니다. 지도 앱을 활용해서 보다 편리하게 이동하세요.";
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
    page17,
    page18,
    page19
);

// Asset
const pageNum = 19;
const pageName = "SD12";
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
    { page: 8, correctAnswer: "남부터미널" },
    {
        page: 11,
        correctAnswer: "서울디지털재단",
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
    startRateX: 0.9971671388101983,
    startRateY: 0.0717557251908397,
    endRateX: 0.8668555240793201,
    endRateY: 0.0015267175572519084,
};

coordinate3 = {
    startRateX: 0.9971671388101983,
    startRateY: 0.0717557251908397,
    endRateX: 0.8668555240793201,
    endRateY: 0.0015267175572519084,
};

coordinate4 = {
    startRateX: 0.6713881019830028,
    startRateY: 0.9206106870229007,
    endRateX: 0.34844192634560905,
    endRateY: 1,
};

coordinate5 = {
    startRateX: 0.7082152974504249,
    startRateY: 0.5435114503816794,
    endRateX: 0.8810198300283286,
    endRateY: 0.5969465648854961,
};

coordinate6 = {
    startRateX: 0.5722379603399433,
    startRateY: 0.5389312977099237,
    endRateX: 0.7762039660056658,
    endRateY: 0.5923664122137404,
};

coordinate7 = {
    startRateX: 0.5694050991501416,
    startRateY: 0.5801526717557252,
    endRateX: 0.7847025495750708,
    endRateY: 0.6351145038167939,
};

coordinate8 = {
    startRateX: 0.8073654390934845,
    startRateY: 0.015267175572519083,
    endRateX: 0.9546742209631728,
    endRateY: 0.09312977099236641,
};

coordinate9 = {
    startRateX: 0.13314447592067988,
    startRateY: 0.016793893129770993,
    endRateX: 0.8668555240793201,
    endRateY: 0.06717557251908397,
};

coordinate10 = {
    startRateX: 0.5694050991501416,
    startRateY: 0.5801526717557252,
    endRateX: 0.7847025495750708,
    endRateY: 0.6351145038167939,
};

coordinate11 = {
    startRateX: 0.5694050991501416,
    startRateY: 0.5801526717557252,
    endRateX: 0.7847025495750708,
    endRateY: 0.6351145038167939,
};

coordinate12 = {
    startRateX: 0.13314447592067988,
    startRateY: 0.016793893129770993,
    endRateX: 0.8668555240793201,
    endRateY: 0.06717557251908397,
};

coordinate13 = {
    startRateX: 0.15864022662889518,
    startRateY: 0.216793893129771,
    endRateX: 0.32011331444759206,
    endRateY: 0.28091603053435116,
};

coordinate14 = {
    startRateX: 0.5042492917847026,
    startRateY: 0.22137404580152673,
    endRateX: 0.3286118980169972,
    endRateY: 0.2824427480916031,
};

coordinate15 = {
    startRateX: 0.5694050991501416,
    startRateY: 0.14198473282442747,
    endRateX: 0.43626062322946174,
    endRateY: 0.2015267175572519,
};

coordinate16 = {
    startRateX: 0.7818696883852692,
    startRateY: 0.14045801526717558,
    endRateX: 0.6430594900849859,
    endRateY: 0.20458015267175572,
};

coordinate17 = {
    startRateX: 0.9405099150141643,
    startRateY: 0.1435114503816794,
    endRateX: 0.8130311614730878,
    endRateY: 0.20763358778625954,
};

coordinate18 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

coordinate19 = {
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
    coordinate17,
    coordinate18,
    coordinate19
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

// 가장 첫페이지의 백그라운드 이미지 로드
loadBackgroundImage(0);

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
