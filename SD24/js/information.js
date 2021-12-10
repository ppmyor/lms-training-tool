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
const page10 = "작업중";
const page11 = "작업중";
const page12 = "작업중";
const page13 = "작업중";

pageDescArray.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13);

const inputPage = [{ page: 4, correctAnswer: "계좌번호를 숫자만" }];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let typeofAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    typeofAnswer = Number(this.value);
                    if (pageNumber === 4) {
                        if (11 <= this.value.length && this.value.length <= 15 && isNaN(typeofAnswer) === false) {
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
    coordinate13
);
