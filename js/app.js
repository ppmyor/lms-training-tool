// Audio Section
const pauseButton = document.querySelector(".pause-button");
const playButton = document.querySelector(".play-button");
const volumeUpButton = document.querySelector(".volume-up");
const volumeDownButton = document.querySelector(".volume-down");
const mobilePlayButton = document.querySelector(".mobile-play-button");
const mobilePauseButton = document.querySelector(".mobile-pause-button");

// Contents Description Section
const pageDescription = document.querySelector(".content-desc");
const pageDescArray = [];
page1 =
    "이번 시간에는, 네이버 지도를 사용해서, 보다 편하게, 길을 찾아보도록 하겠습니다. 휴대폰에서 네이버 앱을 실행하면, 다음과 같은 대기화면이 나타납니다. 다음 페이지로, 넘어가주세요.";
page2 = "네이버 지도의, 기능을 소개하는 화면입니다. 화살표를 눌러주세요.";
page3 = "화살표를 눌러주세요.";
page4 = "이제, 네이버 지도를 시작할 준비가 되었습니다. 시작하기를 눌러주세요.";
page5 =
    "네이버 지도는, 휴대폰의 위치 정보를 통해서, 보다 정확한, 길 안내를 제공합니다. 위치 정보 접근을 허용한다면, 허용을 눌러주세요.";
page6 =
    "광고 알림 기능은 지도기능 사용과 상관이 없고, 허용하지 않아도 사용에 제한이 없기 때문에 허용안함을 클릭해주세요.";
page7 = "이제, 본격적으로 길을 찾아보겠습니다. 길찾기 버튼을 눌러주세요.";
page8 = "기본 출발지는 현재 나의 위치가, 자동으로 입력되어 있습니다. 출발지를 눌러서 변경해보겠습니다.";
page9 =
    "검색창 옆에 닫기를 눌러서, 현재 나의 위치를 지우고, 다른 출발지를 입력해보겠습니다. 출발지는 서울남부터미널을 입력해보겠습니다.";
page10 = "서울남부터미널을 선택해주세요.";
page11 = "이번에는, 도착지를 설정해볼까요? 도착지 입력을 눌러주세요.";
page12 = "도착지는 서울디지털재단을 입력해주세요.";
page13 = "추천되는 검색결과 중 서울디지털재단을 선택해주세요.";
page14 =
    "대중교통으로 이동하는 전체 경로가, 검색되었습니다. 그럼, 버스로 어떻게 이동하는지 확인해볼까요? 버스를 눌러주세요.";
page15 =
    "버스로 어떻게 이동하면 되는지, 경로를 안내해주고 있습니다. 시간도 꼭 확인해주세요. 이번에는, 지하철로 어떻게 이동하는지, 확인해볼까요? 지하철을 눌러주세요.";
page16 =
    "지하철 경로와, 소요되는 시간을 확인해주세요. 다음으로, 대중교통이 아닌 승용차로 이동할시, 이동경로를 살펴보겠습니다. 표시된 부분을 눌러주세요.";
page17 =
    "32분이 소요되는 경로를, 추천해주고 있습니다. 이번에는 도보로 이동하는 경로를, 확인해볼까요? 표시된 부분을 눌러주세요.";
page18 =
    "도보로는 5시간이 소요된다고 합니다. 마지막으로, 자전거를 이용할시, 어떻게 이동하면 되는지, 확인해볼까요? 표시된 부분을 눌러주세요.";
page19 = "자전거로는, 총 1시간17분 소요된다고 합니다. 이제, 여러분도 네이버 지도앱을 활용해서, 편안하게 이동해보세요.";
page20 = "이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";
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
    page19,
    page20
);

// Asset
const pageNum = 20;
const pageName = "네이버길찾기";
const contentImage = [];
const audioArray = [];
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`./assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`./assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

let pageVariable = 0;
let volumeVariable = 0.5;

// Canvas area
const paintedCanvas = document.getElementById("painted-canvas");
const paintedContext = paintedCanvas.getContext("2d");
const practiceClickArea = document.querySelector(".click-area");

const paintedWidth = practiceClickArea.clientWidth;
const paintedHeight = practiceClickArea.clientHeight;
paintedCanvas.width = paintedWidth;
paintedCanvas.height = paintedHeight;
paintedContext.lineWidth = 2;
paintedContext.fillStyle = "rgba(200, 124, 124, 0.5)";

const coordinateArray = [];
coordinate1 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};
coordinate2 = {
    startRateX: 0.8746666666666667,
    startRateY: 0.037481259370314844,
    endRateX: 0.9786666666666667,
    endRateY: 0.095952023988006,
};

coordinate3 = {
    startRateX: 0.8746666666666667,
    startRateY: 0.037481259370314844,
    endRateX: 0.9786666666666667,
    endRateY: 0.095952023988006,
};

coordinate4 = {
    startRateX: 0.37066666666666664,
    startRateY: 0.9340329835082459,
    endRateX: 0.632,
    endRateY: 0.9865067466266867,
};

coordinate5 = {
    startRateX: 0.6,
    startRateY: 0.5772113943028486,
    endRateX: 0.7573333333333333,
    endRateY: 0.6251874062968515,
};

coordinate6 = {
    startRateX: 0.4613333333333333,
    startRateY: 0.6086956521739131,
    endRateX: 0.7013333333333334,
    endRateY: 0.6701649175412294,
};

coordinate7 = {
    startRateX: 0.816,
    startRateY: 0.043478260869565216,
    endRateX: 0.9466666666666667,
    endRateY: 0.11544227886056972,
};

coordinate8 = {
    startRateX: 0.13066666666666665,
    startRateY: 0.047976011994003,
    endRateX: 0.872,
    endRateY: 0.10344827586206896,
};

coordinate9 = {
    startRateX: 0.13066666666666665,
    startRateY: 0.047976011994003,
    endRateX: 0.872,
    endRateY: 0.10344827586206896,
};

coordinate10 = {
    startRateX: 0.005333333333333333,
    startRateY: 0.4332833583208396,
    endRateX: 0.9946666666666667,
    endRateY: 0.5382308845577212,
};

coordinate11 = {
    startRateX: 0.13066666666666665,
    startRateY: 0.11394302848575712,
    endRateX: 0.8693333333333333,
    endRateY: 0.1724137931034483,
};

coordinate12 = {
    startRateX: 0.128,
    startRateY: 0.05247376311844078,
    endRateX: 0.872,
    endRateY: 0.09745127436281859,
};

coordinate13 = {
    startRateX: 0.008,
    startRateY: 0.3553223388305847,
    endRateX: 0.992,
    endRateY: 0.4572713643178411,
};

coordinate14 = {
    startRateX: 0.15466666666666667,
    startRateY: 0.2683658170914543,
    endRateX: 0.2986666666666667,
    endRateY: 0.31334332833583206,
};

coordinate15 = {
    startRateX: 0.32266666666666666,
    startRateY: 0.27136431784107945,
    endRateX: 0.4826666666666667,
    endRateY: 0.31634182908545727,
};

coordinate16 = {
    startRateX: 0.3626666666666667,
    startRateY: 0.18290854572713644,
    endRateX: 0.56,
    endRateY: 0.2413793103448276,
};

coordinate17 = {
    startRateX: 0.584,
    startRateY: 0.18440779610194902,
    endRateX: 0.7066666666666667,
    endRateY: 0.239880059970015,
};

coordinate18 = {
    startRateX: 0.816,
    startRateY: 0.1874062968515742,
    endRateX: 0.92,
    endRateY: 0.2413793103448276,
};

coordinate19 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

coordinate20 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 0,
    endRateY: 0,
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
    coordinate19,
    coordinate20
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

function loadBackgroundImage(page) {
    paintedCanvas.style.backgroundImage = `url(${contentImage[page]})`;
}

// About Move Page
// Index 의 시작 버튼 기능 구현
goToMainPage.addEventListener("click", function () {
    if (pageVariable === 0) {
        workingArea.src = pageArray[0];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        loadBackgroundImage(pageVariable);
        handlePaint(pageVariable);
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
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable - 1].pause();
        pageDescription.innerText = pageDescArray[pageVariable];
        loadBackgroundImage(pageVariable);
        handlePaint(pageVariable);
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
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable - 1].pause();
        loadBackgroundImage(pageVariable);
        handlePaint(pageVariable);
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
        pageVariable++;
        handleLocalStorage(pageVariable);
        workingArea.src = pageArray[0];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable - 1].pause();
        pageDescription.innerText = pageDescArray[pageVariable];
        loadBackgroundImage(pageVariable);
        handlePaint(pageVariable);
        console.log(pageVariable);
    } else {
        console.log("wrong area!");
    }
});

// 이전 단계 버튼 기능 구현
goToPreviousPage.addEventListener("click", function () {
    pageVariable--;
    if (pageVariable >= 0) {
        handleLocalStorage(pageVariable);
        workingArea.src = pageArray[0];
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable + 1].pause();
        pageDescription.innerText = pageDescArray[pageVariable];
        loadBackgroundImage(pageVariable);
        handlePaint(pageVariable);
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
        audioArray[pageVariable].volume = volumeVariable;
        audioArray[pageVariable].load();
        audioArray[pageVariable].play();
        audioArray[pageVariable + 1].pause();
        loadBackgroundImage(pageVariable);
        handlePaint(pageVariable);
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
