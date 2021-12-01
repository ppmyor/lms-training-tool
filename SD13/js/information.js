const pageNum = 17;
const pageName = "SD13";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "이번 실습에서는 자주 방문하는 장소를 지도 앱에 등록하겠습니다. 네이버 지도 앱을 실행해 주세요. 화면을 눌러서, 다음으로 진행해 주세요.";
const page2 =
    "지도 앱의 홈 화면입니다. 지도 서비스에서 장소 즐겨찾기를 이용하면, 집, 회사, 병원 등의 자주 방문하는 장소를 매번 검색하지 않고, 클릭 한 번에 목적지로 설정할 수 있습니다. 검색창 오른쪽에 파란색 길 찾기 버튼을 클릭해 주세요.";
const page3 =
    "길 찾기 버튼을 클릭하면, 출발지와 도착지를 입력하거나 이동 수단을 선택해서 목적지까지 경로를 검색할 수 있습니다. 참고로 출발지에는 현재 나의 위치가 자동으로 등록되어 있습니다. 이제 자주 방문하는 장소 등록을 위해서 집과 회사 버튼 오른쪽에 화살표 버튼을 눌러주세요.";
const page4 =
    "즐겨 찾는 장소 화면에서는 집과 회사/학교가 기본 항목으로 등록되어 있고, 추가로 다른 유형의 자주 가는 장소를 등록할 수 있는 버튼이 있습니다. 먼저 집 설정을 위해 집 버튼을 눌러주세요.";
const page5 =
    "장소 이름을 집이 아닌 다른 명칭으로 변경할 수 있습니다. 실습에서는 집으로 유지하겠습니다. 장소를 지정해 주세요 우측에 더하기 버튼을 클릭해서 집에 해당하는 장소를 지정할 수 있습니다.더하기 버튼을 클릭해 주세요.";
const page6 =
    "집으로 등록할 장소를 지정하겠습니다. 검색창에 집으로 등록할 장소의 주소나 명칭을 검색해서 등록하겠습니다. 실습에서는 서울디지털재단을 집으로 설정하겠습니다. 검색창에 서울디지털재단을 입력하고 엔터 또는 확인을 눌러주세요.";
const page7 =
    "검색된 목록에서 원하는 장소가 있다면 선택해 주세요. 주소를 보니 세 번째 결과가 찾고 있는 결과입니다. 세 번째 검색 된 서울디지털재단을 눌러서 선택해 주세요.";
const page8 =
    "서울디지털재단으로 장소가 지정되었습니다. 화면 하단 저장 버튼을 누르면 등록이 완료됩니다. 파란색 저장 버튼을 눌러 집 등록을 완료해 주세요.";
const page9 =
    "집에는 서울디지털재단이 동록 되었습니다. 이어서 자주 방문하는 병원을 등록해 보겠습니다. 자주 가는 장소에서 등록 버튼을 클릭해 주세요,";
const page10 =
    "저장할 장소의 별명을 병원으로 입력하겠습니다. 별명을 입력해 주세요 부분을 눌러서 병원을 입력하고 엔터 또는 확인을 눌러주세요.";
const page11 =
    "장소의 별명이 병원으로 입력되었습니다. 장소를 찾아서 병원에 등록하겠습니다. 장소 지정을 위해 우측에 더하기 버튼을 눌러주세요.";
const page12 =
    "검색창에 집으로 등록할 장소의 주소나 명칭을 검색해서 등록하겠습니다. 실습에서는 국립중앙의료원을 설정하겠습니다. 상단 검색창에 국립중앙의료원을 입력하고 엔터 또는 확인을 눌러주세요.";
const page13 =
    "검색된 목록에서 원하는 장소가 있다면 선택해 주세요. 주소를 보니 네 번째 결과가 찾고 있는 결과입니다. 네 번째 검색 된 국립중앙의료원을 눌러서 선택해 주세요.";
const page14 =
    "병원에는 국립중앙의료원으로 장소가 지정되었습니다. 화면 하단 저장 버튼을 누르면 등록이 완료됩니다. 파란색 저장 버튼을 눌러 집 등록을 완료해 주세요.";
const page15 =
    "집과 병원 등록이 완료되었습니다. 이제, 자주 방문하는 장소를 활용해서, 경로를 손쉽게 검색하기 위해 화면 상단 좌측에 뒤로 가기 화살표 버튼을 눌러주세요.";
const page16 =
    "현재 출발지는, 서울 디지털재단으로 지정되어 있습니다. 검색 과정 없이 도착지를 국립중앙의료원으로 선택하겠습니다. 검색창 아래 병원 버튼을 눌러주세요.";
const page17 =
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

const coordinate1 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0.8073654390934845,
    startRateY: 0.016793893129770993,
    endRateX: 0.9546742209631728,
    endRateY: 0.0916030534351145,
};

const coordinate3 = {
    startRateX: 0.49575070821529743,
    startRateY: 0.300763358778626,
    endRateX: 0.3654390934844193,
    endRateY: 0.216793893129771,
};

const coordinate4 = {
    startRateX: 0.0028328611898017,
    startRateY: 0.10229007633587786,
    endRateX: 1,
    endRateY: 0.19541984732824427,
};

const coordinate5 = {
    startRateX: 0.8101983002832861,
    startRateY: 0.20458015267175572,
    endRateX: 0.9518413597733711,
    endRateY: 0.27938931297709924,
};

const coordinate6 = {
    startRateX: 0.12181303116147309,
    startRateY: 0,
    endRateX: 0.8668555240793201,
    endRateY: 0.0717557251908397,
};

const coordinate7 = {
    startRateX: 0.0056657223796034,
    startRateY: 0.3053435114503817,
    endRateX: 0.9971671388101983,
    endRateY: 0.41374045801526715,
};

const coordinate8 = {
    startRateX: 0.9688385269121813,
    startRateY: 0.983206106870229,
    endRateX: 0.031161473087818695,
    endRateY: 0.9145038167938931,
};

const coordinate9 = {
    startRateX: 0.9915014164305949,
    startRateY: 0.48244274809160304,
    endRateX: 0,
    endRateY: 0.39083969465648855,
};

const coordinate10 = {
    startRateX: 0.15864022662889518,
    startRateY: 0.1282442748091603,
    endRateX: 0.9518413597733711,
    endRateY: 0.183206106870229,
};

const coordinate11 = {
    startRateX: 0.8130311614730878,
    startRateY: 0.20305343511450383,
    endRateX: 0.9546742209631728,
    endRateY: 0.27633587786259545,
};

const coordinate12 = {
    startRateX: 0.12181303116147309,
    startRateY: 0,
    endRateX: 0.8668555240793201,
    endRateY: 0.0717557251908397,
};

const coordinate13 = {
    startRateX: 0.0056657223796034,
    startRateY: 0.3755725190839695,
    endRateX: 0.9915014164305949,
    endRateY: 0.5206106870229008,
};

const coordinate14 = {
    startRateX: 0.0339943342776204,
    startRateY: 0.9145038167938931,
    endRateX: 0.9688385269121813,
    endRateY: 0.983206106870229,
};

const coordinate15 = {
    startRateX: 0.141643059490085,
    startRateY: 0.00916030534351145,
    endRateX: 0.0084985835694051,
    endRateY: 0.08854961832061069,
};

const coordinate16 = {
    startRateX: 0.5694050991501416,
    startRateY: 0.29923664122137406,
    endRateX: 0.37960339943342775,
    endRateY: 0.21374045801526717,
};

const coordinate17 = {
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
