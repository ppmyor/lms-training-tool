// Audio Section
const pauseButton = document.querySelector(".pause-button");
const playButton = document.querySelector(".play-button");
const mobilePlayButton = document.querySelector(".mobile-play-button");
const mobilePauseButton = document.querySelector(".mobile-pause-button");

// Contents Description Section
const pageDescription = document.querySelector(".content-desc");
const pageDescArray = [];
page1 =
    "이번 시간에는, 네이버 지도를 사용해서, 보다 편하고 정확하게, 길찾기를 하겠습니다. 휴대폰에서 네이버 지도 앱을 실행하고. 화면을 눌러서, 다음 페이지로 진행해주세요.";
page2 =
    "네이버 지도를 최초 실행하면 나오는, 기능과 활용법을 소개하는 튜토리얼 화면입니다. 어떤 편리한 기능이 있는지 살펴본 다음, 화살표를 눌러 다음으로 이동해주세요.";
page3 = "기능과 특장점을 소개하는 화면입니다. 화살표를 눌러 다음으로 이동해주세요.";
page4 = "이제, 본격적으로 네이버 지도를 시작할 준비가 되었습니다. 화면 하단에, 파란색 시작하기 버튼을 눌러주세요.";
page5 =
    "네이버 지도는, 휴대폰의 위치 정보 GPS를 통해서, 보다 정확한, 길 안내를 제공합니다. 최초 실행 시, 알림을 위한 권한 허용 절차가 진행됩니다. 지도 서비스 특성 상 위치정보를 허용하여 지도앱을 이용하겠습니다.";
page6 =
    "공지, 이벤트 정보 알림 기능은, 지도사용과 상관이 없고, 허용하지 않아도 사용에 제한이 없기 때문에, 실습에서는 아니요를 눌러보겠습니다.";
page7 =
    "추천, 혜택 정보 알림도 마찬가지로, 지도사용과 상관이 없고, 허용하지 않아도 사용에 제한이 없습니다. 실습에서는 아니요를 눌러보겠습니다";
page8 =
    "네이버 지도앱의 홈화면입니다. 이제, 길찾기를 시작하겠습니다. 화면 상단에 장소, 버스, 지하철 등을 검색할수 있는 검색창 바로 우측 파란색 길찾기 버튼을 클릭해주세요.";
page9 =
    "길찾기 화면에서 출발지와 도착지를 선택한 다음, 이동수단을 선택해서 검색 할 수 있습니다. 출발지에, 새로운 장소를 등록해보겠습니다. 출발지에 남부터미널을 입력해주세요.";
page10 = "추천되는 검색결과 중에서, 남부터미널역 3호선을 선택해주세요.";
page11 = "이번에는, 도착지를 설정해볼까요? 도착지 입력을 클릭하고 서울디지털재단을 입력해주세요.";
page12 = "추천되는 검색결과 중에서, 서울디지털재단을 선택해주세요.";
page13 =
    "길찾기 검색 결과입니다. 버스 모양 아이콘의 대중교통으로 이동하는 전체 경로가 검색되었습니다. 최적 경로가 가장 먼저 출력 되고, 예상 소요 시간은 57분입니다. 도착 시간, 요금, 그리고 환승도 확인 할 수 있습니다. 그럼, 버스를 이용해서 목적지에 가고 싶을 때 경로를 확인하겠습니다. 검색 결과에서 버스를 눌러주세요.";
page14 =
    "버스로 어떻게 이동하면 되는지, 경로를 안내해주고 있습니다. 시간도 꼭 확인해주세요. 이번에는, 지하철로 어떻게 이동하는지, 확인해볼까요? 지하철을 눌러주세요.";
page15 =
    "지하철 경로, 소요되는 시간을 확인해주세요. 다음으로, 대중교통이 아닌 승용차로 이동 할 시, 이동 경로를 살펴보겠습니다. 버스 모양 아이콘 바로 옆 자동차 모양 아이콘을 눌러주세요.";
page16 =
    "자동차로 이동 시 35분이 소요되는 경로를 추천해주고 있습니다. 이번에는 도보로 이동하는 경로를, 확인해볼까요? 자동차 아이콘 바로 옆, 사람이 걷는 모양 아이콘을 눌러주세요.";
page17 =
    "도보로는 4시간 58분 소요 예상되고, 거리와 총 걸음 수도 표시됩니다. 도보 이동을 위한 경로 상의 횡단보도와 지하도 수도 표시됩니다. 마지막으로, 자전거를 이용한 이동 경로를 확인해보겠습니다. 자전거 모양 아이콘을 부분을 눌러주세요.";
page18 =
    "자전거로는, 총 1시간17분 소요 예상 됩니다. 경로 상의 교량과 횡단보도 정보 그리고 경로 미리 보기를 제공합니다. 이제, 여러분도 네이버 지도앱을 활용해서 보다 편리하게 이동하세요. 이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";
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
    page18
);

// Asset
const pageNum = 18;
const pageName = "네이버길찾기";
const contentImage = [];
const audioArray = [];
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`./assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

let pageVariable = 0;

// Canvas area
const paintedCanvas = document.getElementById("painted-canvas");
const paintedContext = paintedCanvas.getContext("2d");
const practiceClickArea = document.querySelector(".click-area");

const hintButton = document.querySelector(".hint-button");

const paintedWidth = practiceClickArea.clientWidth;
const paintedHeight = practiceClickArea.clientHeight;
paintedCanvas.width = paintedWidth;
paintedCanvas.height = paintedHeight;
paintedContext.lineWidth = 2;

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
    startRateX: 0.0056657223796034,
    startRateY: 0.41374045801526715,
    endRateX: 0.9943342776203966,
    endRateY: 0.5068702290076336,
};

coordinate11 = {
    startRateX: 0.1359773371104816,
    startRateY: 0.07633587786259542,
    endRateX: 0.8696883852691218,
    endRateY: 0.1297709923664122,
};

coordinate12 = {
    startRateX: 0.0113314447592068,
    startRateY: 0.3053435114503817,
    endRateX: 0.9971671388101983,
    endRateY: 0.4030534351145038,
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
    coordinate18
);

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

imageVariable = 0;
loadBackgroundImage(imageVariable);

// handle local Storage function
function handleLocalStorage(pageIndex) {
    localStorage.setItem("pageNumber", pageIndex);
}

function rateCalculator(pageCount) {
    nowStartX = coordinateArray[pageCount].startRateX * paintedWidth;
    nowStartY = coordinateArray[pageCount].startRateY * paintedHeight;
    nowEndX = coordinateArray[pageCount].endRateX * paintedWidth;
    nowEndY = coordinateArray[pageCount].endRateY * paintedHeight;
}

function handlePaint(currentPage) {
    paintedContext.clearRect(0, 0, paintedContext.canvas.width, paintedContext.canvas.height);
    rateCalculator(currentPage);
    paintedContext.fillRect(nowStartX, nowStartY, nowEndX - nowStartX, nowEndY - nowStartY);
}

function handleTransparentPaint(currentPage) {
    paintedContext.fillStyle = "rgba(200, 124, 124, 0)";
    handlePaint(currentPage);
}

hintButton.addEventListener("click", function () {
    paintedContext.fillStyle = "rgba(200, 124, 124, 0.5)";
    handlePaint(pageVariable);
});

function loadBackgroundImage(page) {
    paintedCanvas.style.backgroundImage = `url(${contentImage[page]})`;
}

// About Move Page
// Index 의 시작 버튼 기능 구현
goToMainPage.addEventListener("click", function () {
    if (pageVariable === 0) {
        workingArea.src = pageArray[0];
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        loadBackgroundImage(pageVariable);
        handleTransparentPaint(pageVariable);
        pageDescription.innerText = pageDescArray[pageVariable];
        console.log(pageVariable);
    } else {
        console.log("done");
    }
});

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
});

// 다음 단계 버튼 기능 구현
goToNextPage.addEventListener("click", function () {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        handleLocalStorage(pageVariable);
        workingArea.src = pageArray[0];
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable - 1].pause();
        pageDescription.innerText = pageDescArray[pageVariable];
        loadBackgroundImage(pageVariable);
        handleTransparentPaint(pageVariable);
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
        workingArea.src = pageArray[0];
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable - 1].pause();
        loadBackgroundImage(pageVariable);
        handleTransparentPaint(pageVariable);
        console.log(pageVariable);
    } else {
        console.log("last page");
        pageVariable = contentImage.length - 1;
        console.log(pageVariable);
    }
});

paintedCanvas.addEventListener("click", function (event) {
    let clickX = event.offsetX;
    let clickY = event.offsetY;
    if (clickX >= nowStartX && clickY >= nowStartY && clickX <= nowEndX && clickY <= nowEndY) {
        handleClickBox();
    } else if (clickX <= nowStartX && clickY <= nowStartY && clickX >= nowEndX && clickY >= nowEndY) {
        handleClickBox();
    } else if (clickX <= nowStartX && clickY >= nowStartY && clickX >= nowEndX && clickY <= nowEndY) {
        handleClickBox();
    } else if (clickX >= nowStartX && clickY <= nowStartY && clickX <= nowEndX && clickY >= nowEndY) {
        handleClickBox();
    } else {
        alert("다시 생각해 보세요!");
    }
});

function handleClickBox() {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        handleLocalStorage(pageVariable);
        workingArea.src = pageArray[0];
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable - 1].pause();
        pageDescription.innerText = pageDescArray[pageVariable];
        loadBackgroundImage(pageVariable);
        handleTransparentPaint(pageVariable);
        console.log(pageVariable);
    } else {
        console.log("last page");
        pageVariable = contentImage.length - 1;
        console.log(pageVariable);
    }
}

// 이전 단계 버튼 기능 구현
goToPreviousPage.addEventListener("click", function () {
    pageVariable--;
    if (pageVariable >= 0) {
        handleLocalStorage(pageVariable);
        workingArea.src = pageArray[0];
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable + 1].pause();
        pageDescription.innerText = pageDescArray[pageVariable];
        loadBackgroundImage(pageVariable);
        handleTransparentPaint(pageVariable);
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
        workingArea.src = pageArray[0];
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable + 1].pause();
        loadBackgroundImage(pageVariable);
        handleTransparentPaint(pageVariable);
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

// Mobile

mobilePlayButton.addEventListener("click", function () {
    audioArray[pageVariable].load();
    audioArray[pageVariable].play();
});

mobilePauseButton.addEventListener("click", function () {
    audioArray[pageVariable].pause();
});
