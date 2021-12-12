const pageNum = 13;
const pageName = "SD24";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "비플제로페이로 상품권 없이 은행 계좌에서 즉시 결제하기 위해서 은행 계좌를 제로페이에 연결하는 실습을 진행하겠습니다. '계좌에서 제로페이 결제' 버튼을 눌러주세요.";
const page2 =
    "비플제로페이에 개인용 계좌를 등록해야만 '계좌에서 제로페이 결제' 개인용 서비스 이용이 가능합니다. 제로페이에 계좌를 등록하기 위해 확인을 눌러주세요.";
const page3 =
    "계좌관리 화면입니다. 제로페이 결제와 상품권 구매를 위한 계좌 정보를 관리합니다. 현재 등록된 계좌가 없습니다. 계좌 등록을 위해서 더하기 표시를 눌러주세요";
const page4 = "실습에서 입력한 정보는 저장 및 전송되지 않습니다. 등록을 원하는 본인 명의의 계좌 은행을 선택해 주세요.";
const page5 = "이름은 자동으로 등록되어 있습니다. 계좌번호를 숫자만 입력하고 엔터 또는 확인을 눌러주세요.";
const page6 = "계좌번호 입력이 완료되었습니다. ARS 인증 전화 수신을 위해 화면 하단 ARS 인증 버튼을 눌러주세요.";
const page7 =
    "전화를 받아서 ARS 인증을 진행해 주세요. 안내 음성을 잘 듣고 요청하는 정보를 키패드로 입력하면 인증됩니다. 실습에서는 화면을 눌러 다음으로 진행해 주세요.";
const page8 = "ARS 인증을 통해 계좌 등록이 완료되었습니다. 화면 하단 파란색 확인 버튼을 눌러주세요.";
const page9 =
    "계좌 연결이 완료되었습니다. 가맹점에서 비플제로페이로 결제하는 방법에는 크게 2가지가 있습니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page10 = "출발 날짜와 시간을 선택할 수 있는 달력이 열렸습니다. 실습에서 출발 날짜는 11일 목요일로 선택해 주세요.";
const page11 = "출발일이 11일로 선택되었습니다. 11일 오전 6시 이후의 기차 편을 조회하기 위해 '06시'를 선택해 주세요.";
const page12 =
    "출발일과 출발 시간이 잘 선택되었습니다. 승객 연령 및 좌석 수는 기본 성인 1명으로 설정되어 있습니다. 실습에서는 변경하지 않고 화면 하단 '열차 조회하기' 버튼을 눌러주세요.";
const page13 =
    "11월 11일 오전 6시 이후 용산에서 서대전까지 성인 1명이 예약 가능한 열차가 조회되었습니다. 실습에서는 용산에서 오전 6시 12분 출발하여 서대전에 오전 7시 19분 도착 예정인 KTX 산천 471 열차의 일반실 19,900원 열차를 눌러주세요.";
const page14 = "소요 시간과 요금 그리고 좌석을 확인한 다음 예매 버튼을 눌러주세요.";
const page15 =
    "코레일 회원이라면 회원 로그인 후 예매가 가능합니다. 실습에서는 비회원 로그인으로 예매하겠습니다. 화면 하단에 '비회원' 버튼을 눌러주세요.";
const page16 = "비회원 예약을 위한 정보 입력입니다. 이름 입력을 눌러서 이름을 입력하고 엔터 또는 확인을 눌러주세요.";
const page17 = "전화번호 항목에 전화번호를 숫자만 입력하고 엔터 또는 확인을 눌러주세요.";
const page18 = "비밀번호 항목에 설정하고 싶은 비밀번호를 5자리 숫자로 입력하고 엔터 또는 확인을 눌러주세요.";
const page19 = "비밀번호 확인 항목에 방금 설정한 비밀번호 5자리 숫자를 한 번 더 입력하고 엔터 또는 확인을 눌러주세요.";
const page20 =
    "정보 입력이 완료되었습니다. 입력한 이름, 전화번호, 비밀번호를 이용하여 비회원 예약 확인 및 취소가 가능합니다. 내용을 확인하고 화면 하단 확인 버튼을 눌러주세요.";
const page21 = "이용안내 확인 페이지입니다. 내용을 확인하고 ‘위 내용에 대해 확인하였습니다.’를 체크해 주세요.";
const page22 = "안내 창 하단 '네'를 눌러서 다음으로 진행해 주세요.";
const page23 =
    "결제 전 승차권 정보를 확인해 주세요. 결제와 발권, 환불 관련 주의 사항을 확인하고 화면 하단 '결제하기' 버튼을 눌러주세요.";
const page24 = "예약 열차 정보 및 승차권 금액 그리고 각종 할인 항목을 확인하고 다음 버튼을 눌러주세요.";

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
    page23,
    page24
);


const inputPage = [{ page: 4, correctAnswer: "계좌번호 - 숫자만 7자리 이상 입력" }];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let typeofAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    typeofAnswer = Number(this.value);
                    if (pageNumber === 4) {
                        if (7 <= this.value.length && this.value.length <= 20 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    }
                }
            });
        }
    }
}

const coordinate1 = {
    startRateX: 0.9490084985835694,
    startRateY: 0.8442748091603054,
    endRateX: 0.04815864022662889,
    endRateY: 0.6931297709923664,
};

const coordinate2 = {
    startRateX: 0.7280453257790368,
    startRateY: 0.5465648854961832,
    endRateX: 0.8895184135977338,
    endRateY: 0.6045801526717557,
};

const coordinate3 = {
    startRateX: 0.9461756373937678,
    startRateY: 0.4763358778625954,
    endRateX: 0.0453257790368272,
    endRateY: 0.216793893129771,
};

const coordinate4 = {
    startRateX: 0.042492917847025496,
    startRateY: 0.16793893129770993,
    endRateX: 0.9461756373937678,
    endRateY: 0.7938931297709924,
};

const coordinate5 = {
    startRateX: 0.059490084985835696,
    startRateY: 0.31755725190839695,
    endRateX: 0.9376770538243626,
    endRateY: 0.383206106870229,
};

const coordinate6 = {
    startRateX: 0,
    startRateY: 0.917557251908397,
    endRateX: 1,
    endRateY: 1,
};

const coordinate7 = {
    startRateX: 0.0056657223796034,
    startRateY: 0.0015267175572519084,
    endRateX: 0.9971671388101983,
    endRateY: 0.9984732824427481,
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0.917557251908397,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate11 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate12 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate13 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
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
    startRateX: 0.33994334277620397,
    startRateY: 0.10229007633587786,
    endRateX: 0.9603399433427762,
    endRateY: 0.16793893129770993,
};

const coordinate17 = {
    startRateX: 0.9603399433427762,
    startRateY: 0.250381679389313,
    endRateX: 0.33994334277620397,
    endRateY: 0.18473282442748093,
};
const coordinate18 = {
    startRateX: 0.33994334277620397,
    startRateY: 0.2687022900763359,
    endRateX: 0.9575070821529745,
    endRateY: 0.33129770992366414,
};
const coordinate19 = {
    startRateX: 0.33994334277620397,
    startRateY: 0.35419847328244275,
    endRateX: 0.9575070821529745,
    endRateY: 0.4152671755725191,
};
const coordinate20 = {
    startRateX: 0.9971671388101983,
    startRateY: 0.9114503816793893,
    endRateX: 0,
    endRateY: 0.8091603053435115,
};

const coordinate21 = {
    startRateX: 0.07932011331444759,
    startRateY: 0.716030534351145,
    endRateX: 0.17563739376770537,
    endRateY: 0.7633587786259542,
};

const coordinate22 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.7893129770992366,
    endRateX: 0.9603399433427762,
    endRateY: 0.8641221374045801,
};

const coordinate23 = {
    startRateX: 0,
    startRateY: 0.8977099236641222,
    endRateX: 1,
    endRateY: 1,
};

const coordinate24 = {
    startRateX: 0.5042492917847026,
    startRateY: 0.9145038167938931,
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
    coordinate23,
    coordinate24
);
