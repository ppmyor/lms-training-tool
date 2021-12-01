const pageNum = 19;
const pageName = "SD12";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "지도 서비스를 사용해서 보다 편하고 정확한 길 찾기를 실습하겠습니다. 실습에서 남부터미널 역 3호선에서 서울디지털재단까지 가는 길을 찾아보겠습니다. 화면을 눌러서 다음 페이지로 진행해 주세요.";
const page2 =
    "네이버 지도를 최초 실행하면 나오는, 기능과 활용법을 소개하는 튜토리얼 화면입니다. 대중교통 길 찾기 기능 활용을 소개하고 있습니다. 내용을 확인하고, 화면 상단 우측에 화살표를 눌러 다음으로 진행해 주세요.";
const page3 =
    "지도 앱 기능 중 내비게이션 기능과 특장점을 소개하는 화면입니다. 화면 상단 우측에 화살표를 눌러 다음으로 진행해 주세요.";
const page4 =
    "이제, 본격적으로 네이버 지도를 시작할 준비가 되었습니다. 화면 하단에, 파란색 시작하기 버튼을 눌러주세요.";
const page5 =
    "지도 앱을 사용할 때에는 휴대폰의 위치 정보 GPS를 허용하면 보다 편리한 이용이 가능합니다. 실습에서는 위치정보를 허용하여 지도 앱을 이용하겠습니다. 허용을 눌러주세요.";
const page6 =
    "공지, 이벤트 정보 알림 기능은 허용하지 않더라도 지도 서비스 이용에 제한은 없습니다. 실습에서는 허용하지 않겠습니다. 아니요를 눌러주세요.";
const page7 =
    "지도 앱의 첫 화면입니다. 화면 상단에 장소, 버스, 지하철 등을 검색할 수 있는 검색창이 있습니다. 길 찾기를 시작하기 위해 검색창 바로 우측 파란색 길 찾기 버튼을 클릭해 주세요.";
const page8 =
    "길 찾기 화면에서 출발지와 도착지를 선택한 다음 이동 수단을 선택해서 검색할 수 있습니다. 출발지에 새로운 장소를 등록해 보겠습니다. 출발지 입력 항목을 눌러서 선택해 주세요.";
const page9 = "출발지 입력 화면입니다. 출발지 입력란에 남부터미널을 입력하고 엔터 또는 확인을 눌러주세요.";
const page10 =
    "실습에서는 추천되는 검색 결과 중에서종합버스터미널이 아닌 지하철역을 선택하겠습니다. 남부터미널 역 3호선을 눌러서 선택해 주세요.";
const page11 = "출발지에 남부터미널 역 3호선이 입력되었습니다. 도착지를 입력하겠습니다. 도착지 입력을 눌러주세요.";
const page12 = "도착지 입력 화면입니다. 도착지 입력란에 서울디지털재단을 입력하고 엔터 또는 확인을 눌러주세요.";
const page13 = "실습에서는 추천되는 검색 결과 중에서 첫 번째 서울디지털재단을 눌러서 선택해 주세요.";
const page14 =
    "길 찾기 검색 결과입니다. 도착지 입력창 아래 버스 모양 아이콘은 대중교통을 이용 길 찾기 결과를 보여줍니다. 최적 경로의 예상 소요 시간은 59분이며, 도착 시간, 요금, 그리고 환승도 확인할 수 있습니다. 버스만 이용해서 목적지에 가고 싶을 때 경로를 확인하겠습니다. 파란색 버스 아이콘 아래 전체 버튼 옆 버스 버튼을 눌러주세요..";
const page15 =
    "지하철을 이용하지 않고, 버스만 이용해서 도착지로 가는 3개의 경로를 제안하고 있습니다. 이번에는 지하철만 이용해서 목적지에 가고 싶을 때 경로를 확인하겠습니다. 버스 버튼 옆 지하철 버튼을 눌러주세요.";
const page16 =
    "버스를 이용하지 않고, 지하철만 이용해서 도착지로 가는 3개의 경로를 제안하고 있습니다. 이번에는 대중교통이 아닌 승용차를 이용한 길 찾기 결과를 살펴보겠습니다. 버스 모양 아이콘 바로 우측 자동차 모양 아이콘을 눌러주세요.";
const page17 =
    "자동차로 이동 시 올림픽대로를 이용하는 28분이 소요되는 경로를 추천하고 있습니다. 이번에는 도보로 이동하는 경로를 확인하겠습니다. 자동차 아이콘 바로 우측 사람이 걷는 모양 아이콘을 눌러주세요.";
const page18 =
    "도보로는 4시간 58분 소요 예상되고, 거리와 예상 걸음 수를 확인할 수 있습니다. 마지막으로 자전거를 이용한 이동 경로를 확인해 보겠습니다. 자전거 모양 아이콘을 눌러주세요.";
const page19 =
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

const inputPage = [
    { page: 8, correctAnswer: "남부터미널" },
    {
        page: 11,
        correctAnswer: "서울디지털재단",
    },
];

const coordinate1 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0.8611898016997167,
    startRateY: 0.0015267175572519084,
    endRateX: 0.9971671388101983,
    endRateY: 0.06870229007633588,
};

const coordinate3 = {
    startRateX: 0.8611898016997167,
    startRateY: 0.0015267175572519084,
    endRateX: 0.9971671388101983,
    endRateY: 0.06870229007633588,
};

const coordinate4 = {
    startRateX: 0.0028328611898017,
    startRateY: 0.916030534351145,
    endRateX: 1,
    endRateY: 1,
};

const coordinate5 = {
    startRateX: 0.7082152974504249,
    startRateY: 0.5435114503816794,
    endRateX: 0.8810198300283286,
    endRateY: 0.5969465648854961,
};

const coordinate6 = {
    startRateX: 0.5722379603399433,
    startRateY: 0.5389312977099237,
    endRateX: 0.7762039660056658,
    endRateY: 0.5923664122137404,
};

const coordinate7 = {
    startRateX: 0.8073654390934845,
    startRateY: 0.015267175572519083,
    endRateX: 0.9546742209631728,
    endRateY: 0.09312977099236641,
};

const coordinate8 = {
    startRateX: 0.1359773371104816,
    startRateY: 0.015267175572519083,
    endRateX: 0.8696883852691218,
    endRateY: 0.0732824427480916,
};

const coordinate9 = {
    startRateX: 0.1359773371104816,
    startRateY: 0.015267175572519083,
    endRateX: 0.8696883852691218,
    endRateY: 0.0732824427480916,
};

const coordinate10 = {
    startRateX: 1,
    startRateY: 0.8122137404580153,
    endRateX: 0,
    endRateY: 0.6427480916030535,
};

const coordinate11 = {
    startRateX: 0.1359773371104816,
    startRateY: 0.07633587786259542,
    endRateX: 0.8668555240793201,
    endRateY: 0.13587786259541984,
};

const coordinate12 = {
    startRateX: 0.1359773371104816,
    startRateY: 0.015267175572519083,
    endRateX: 0.8696883852691218,
    endRateY: 0.0732824427480916,
};

const coordinate13 = {
    startRateX: 0.9971671388101983,
    startRateY: 0.32213740458015266,
    endRateX: 0,
    endRateY: 0.1465648854961832,
};

const coordinate14 = {
    startRateX: 0.15864022662889518,
    startRateY: 0.2183206106870229,
    endRateX: 0.32577903682719545,
    endRateY: 0.28549618320610687,
};

const coordinate15 = {
    startRateX: 0.509915014164306,
    startRateY: 0.2198473282442748,
    endRateX: 0.32294617563739375,
    endRateY: 0.2870229007633588,
};

const coordinate16 = {
    startRateX: 0.5722379603399433,
    startRateY: 0.21374045801526717,
    endRateX: 0.40226628895184136,
    endRateY: 0.13282442748091602,
};

const coordinate17 = {
    startRateX: 0.7847025495750708,
    startRateY: 0.216793893129771,
    endRateX: 0.623229461756374,
    endRateY: 0.13129770992366413,
};

const coordinate18 = {
    startRateX: 0.9971671388101983,
    startRateY: 0.21374045801526717,
    endRateX: 0.9121813031161473,
    endRateY: 0.13587786259541984,
};

const coordinate19 = {
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
