const pageNum = 23;
const pageName = "SD15";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "코레일톡을 활용해서 모바일로 기차 예매를 실습하겠습니다.코레일톡을 실행해 주세요. 최초 실행 시 접근 권한 설정 안내 확인이 필요합니다. 휴대폰에 정보를 저장하는 권한은 필수, 휴대폰 위치 제공은 선택입니다. 확인하셨다면 앱 사용을 위해서 네를 눌러 다음으로 진행해 주세요. ";
const page2 = "기기의 사진, 미디어, 파일 접근 권한에 대해서 허용을 눌러 다음으로 진행해 주세요.";
const page3 = "위치 접근 권한은 필수적으로 필요한 권한은 아닙니다. 실습에서는 거부를 선택하겠습니다. 거부를 눌러 다음으로 진행해 주세요.";
const page4 = "승차권을 예매 화면입니다. 편도와 왕복 승차권을 예매할 수 있습니다. 실습에서는 편도 승차권, 용산역에서 서대전역까지 가는 KTX 성인 1매를 예약하겠습니다. 화면을 눌러 실습을 진행해 주세요.";
const page5 = "출발 역을 선택하겠습니다. 기본 값으로 서울이 입력되어 있습니다. 서울을 눌러서 오늘의 출발역인 용산역으로 변경하겠습니다. 서울을 눌러주세요.";
const page6 = "출발 역의 기본값 서울을 누르면 출발 가능한 기차역 선택 창이 펼쳐집니다. 원하는 역이 안 보인다면, 검색창에 역이름을 검색해 주세요. 이번 실습의 출발역은 용산역입니다. 용산을 선택해 주세요.";
const page7 = "출발 역이 용산으로 변경되었습니다. 이번에는 도착 역을 선택해 보겠습니다. 도착 역의 기본 값이 부산으로 되어있습니다. 도착 역 변경을 위해 부산을 눌러주세요.";
const page8 = "도착 역의 기본값 부산을 누르면 도착지로 설정 가능한 기차역 선택 창이 펼쳐집니다. 원하는 역이 안 보인다면, 검색창에 역 이름을 검색해 주세요. 이번 실습의 도착역은 서대전역입니다. 서대전을 선택해 주세요.";
const page9 = "출발역은 용산으로 도착역은 서대전으로 선택되었습니다. 다음으로 출발 날짜를 설정해 보겠습니다. 출발일의 날짜 부분 또는 날짜 아래 펼침 화살표 버튼 부분을 눌러주세요.";
const page10 = "출발 날짜와 시간을 선택할 수 있는 달력이 열렸습니다. 실습에서는 출발 날짜를 11일 목요일을 눌러 선택하겠습니다.";
const page11 = "출발일이 11일로 선택되었습니다. 출발 시간을 6시로 선택하겠습니다. 6시 이후의 기차 편이 모두 조회됩니다. 06시를 눌러서 선택해 주세요.";
const page12 = "출발일과 출발 시간이 잘 선택되었습니다. 승객 연령 및 좌석 수는 기본 성인 1명으로 설정되어 있습니다. 실습에서는 변경하지 않고 11월 11일 06시 이후 용산에서 서대전까지 성인 1명이 예약 가능한 열차를 조회하겠습니다. 열차 조회하기 버튼을 눌러주세요.";
const page13 = "11월 11일 오전 6시 이후 용산에서 서대전까지 성인 1명이 예약 가능한 열차가 조회되었습니다. 예약을 위해 용산에서 오전 6시 12분 출발하여 서대전에 오전 7시 19분 도착 예정인 KTX 산천 471 열차의 일반실 19,900원 열차를 선택하고 클릭해 주세요.";
const page14 = "소요되는 시간과 요금 그리고 좌석을 확인한 다음 예매 버튼을 눌러주세요.";
const page15 = "코레일 회원이라면 회원 로그인 후 예매를 진행해 주세요. 실습에서는 비회원 로그인으로 예매를 진행하겠습니다. 화면 하단에 비회원 버튼을 눌러주세요. ";
const page16 = "실제로 승차권 예매를 진행하실 때에는, 예약자의 정보를 입력해 주세요. 이번 실습에서는 자동으로 정보를 채우겠습니다. 입력폼을 클릭해 주세요.";
const page17 = "정보 입력이 완료되었습니다. 비밀번호와 비밀번호 확인은 코레일 계정이 아니며, 비회원 예약을 위한 비밀번호입니다. 이곳에 입력한 이름, 전화번호, 비밀번호를 이용하여 예약 확인 및 취소 등이 가능합니다. 입력을 완료하고 화면 하단 확인 버튼을 눌러주세요.";
const page18 = "이용안내 확인 페이지입니다. 비회원 예약 중 사용된 개인 정보이름, 전화번호, 그리고 비밀번호는 승차권 구입, 원활한 고객 상담, 각종 서비스 제공을 위한 최소한의 필수 수집 정보라는 안내이며, 확인이 필요합니다. 안내문 하단 체크박스를 클릭해서 확인해 주세요.";
const page19 = "체크박스에 체크를 완료하셨다면, 다음 페이지로 진행하기 위해 네를 눌러주세요.";
const page20 = "결제 전 승차권 정보를 확인해 주세요. 출발 날짜와 출발역, 시간, 도착역, 기차 번호, 그리고 좌석번호까지 확인하신 다음, 결제와 발권, 환불에 관련된 주의사항을 꼼꼼하게 읽어주세요. 이제 결제만 하면 예약이 완료됩니다. 화면 하단 결제하기 버튼을 눌러주세요.";
const page21 = "승차권 금액을 확인해 주시고, 각종 할인 사항에 여러분이 해당하는지 확인해 주세요. 확인하셨다면, 다음 버튼을 눌러주세요.";
const page22 = "카드 결제와 간편 결제 중 선택하여 결제할 수 있습니다. 간편 결제의 경우, 포인트를 먼저 선택한 다음, 사용할 간편 결제 서비스를 선택해 주시면 됩니다. 지원하는 간편 결제에는 페이코, 카카오 페이, 네이버 페이 등이 지원됩니다. 사용 중인 간편 결제 서비스가 있다면, 간편 결제를 사용하여 결제하면 예약이 완료됩니다. 이번에는 화면 상단에 카드 결제 버튼을 눌러주세요.";
const page23 = "카드 결제도 간편 결제와 마찬가지로, 포인트를 먼저 선택하고, 신용카드 정보를 입력해서 결제를 진행할 수 있습니다. 자주 사용하는 카드를 등록해서 사용하거나, 카드 번호를 입력하고 결제/발권을 누르면 결제가 진행됩니다. 이상으로, 이번 시간에 준비한, 실습을 마치겠습니다. 감사합니다.";

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
    page20,
    page21,
    page22,
    page23
);

const inputPage = [{ page: null, correctAnswer: null }];

const coordinate1 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.7022900763358778,
    endRateX: 0.9631728045325779,
    endRateY: 0.7786259541984732,
};

const coordinate2 = {
    startRateX: 0.8951841359773371,
    startRateY: 0.6152671755725191,
    endRateX: 0.6940509915014165,
    endRateY: 0.5557251908396946,
};

const coordinate3 = {
    startRateX: 0.7082152974504249,
    startRateY: 0.5984732824427481,
    endRateX: 0.5155807365439093,
    endRateY: 0.5374045801526718,
};

const coordinate4 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate5 = {
    startRateX: 0.4192634560906516,
    startRateY: 0.2778625954198473,
    endRateX: 0.08498583569405099,
    endRateY: 0.1465648854961832,
};

const coordinate6 = {
    startRateX: 0.45892351274787535,
    startRateY: 0.45038167938931295,
    endRateX: 0.9206798866855525,
    endRateY: 0.5221374045801527,
};

const coordinate7 = {
    startRateX: 0.9320113314447592,
    startRateY: 0.15267175572519084,
    endRateX: 0.5920679886685553,
    endRateY: 0.27633587786259545,
};

const coordinate8 = {
    startRateX: 0.46458923512747874,
    startRateY: 0.7847328244274809,
    endRateX: 0.9178470254957507,
    endRateY: 0.8564885496183207,
};

const coordinate9 = {
    startRateX: 0.34844192634560905,
    startRateY: 0.45190839694656487,
    endRateX: 0.660056657223796,
    endRateY: 0.49923664122137407,
};

const coordinate10 = {
    startRateX: 0.3031161473087819,
    startRateY: 0.433587786259542,
    endRateX: 0.43626062322946174,
    endRateY: 0.5068702290076336,
};

const coordinate11 = {
    startRateX: 0.8016997167138811,
    startRateY: 0.5206106870229008,
    endRateX: 0.9376770538243626,
    endRateY: 0.5969465648854961,
};

const coordinate12 = {
    startRateX: 0.5014164305949008,
    startRateY: 0.8106870229007633,
    endRateX: 0.9971671388101983,
    endRateY: 0.9099236641221374,
};

const coordinate13 = {
    startRateX: 0.5977337110481586,
    startRateY: 0.7083969465648855,
    endRateX: 0.7762039660056658,
    endRateY: 0.76793893129771,
};

const coordinate14 = {
    startRateX: 0,
    startRateY: 0.8076335877862595,
    endRateX: 1,
    endRateY: 0.9114503816793893,
};

const coordinate15 = {
    startRateX: 0.9631728045325779,
    startRateY: 0.8839694656488549,
    endRateX: 0.036827195467422094,
    endRateY: 0.8137404580152672,
};

const coordinate16 = {
    startRateX: 0.32294617563739375,
    startRateY: 0.09770992366412214,
    endRateX: 0.9773371104815864,
    endRateY: 0.42442748091603055,
};

const coordinate17 = {
    startRateX: 0.9971671388101983,
    startRateY: 0.9114503816793893,
    endRateX: 0,
    endRateY: 0.8091603053435115,
};

const coordinate18 = {
    startRateX: 0.07932011331444759,
    startRateY: 0.716030534351145,
    endRateX: 0.17563739376770537,
    endRateY: 0.7633587786259542,
};

const coordinate19 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.7893129770992366,
    endRateX: 0.9603399433427762,
    endRateY: 0.8641221374045801,
};

const coordinate20 = {
    startRateX: 0,
    startRateY: 0.8977099236641222,
    endRateX: 1,
    endRateY: 1,
};

const coordinate21 = {
    startRateX: 0.5042492917847026,
    startRateY: 0.9145038167938931,
    endRateX: 1,
    endRateY: 1,
};

const coordinate22 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.1480916030534351,
    endRateX: 0,
    endRateY: 0.07022900763358779,
};

const coordinate23 = {
    startRateX: 0,
    startRateY: 0.2732824427480916,
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
    coordinate19,
    coordinate20,
    coordinate21,
    coordinate22,
    coordinate23
);
