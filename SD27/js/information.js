const pageNum = 20;
const pageName = "SD27";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.png`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "셀프계산대를 사용하는 방법에 대해 실습해 보겠습니다. 매장에서는 제품의 바코드를 찾아 스캔하거나 스캔 시작하기 버튼을 누르면 셀프 계산이 시작됩니다. 스캔 시작하기 버튼을 눌러주세요.";
const page2 = "결제할 상품들의 바코드를 찾아 스캐너로 스캔해 주세요.";
const page3 = "스카치 테이프 1개가 스캔되었습니다. 스캔한 제품과 스캔하지 않은 제품이 잘 구분되도록 스캔한  제품은 꼭 포장대 위로 이동하여 놓아주세요.";
const page4 = "제품을 스캔하고, 포장대로 옮기는 작업은 중요합니다. 스캔한 제품이 포장대 위로 이동하면, 센서 또는 무게로 인식하고 다음 제품 스캔이 가능한 셀프 계산대가 많이 보급되어 있습니다.  스캔한 상품을 포장대 위로 옮겨 놓아주세요. 포장대로 전부 이동했다면, 확인을 눌러 주세요";
const page5 = "결제할 상품의 바코드를 찾아 스캐너로 스캔해 주세요.";
const page6 = "자두맛 사탕 1개가 스캔되었습니다. ";
const page7 = "스캔한 제품과 스캔하지 않은 제품이 잘 구분되도록 스캔한  제품은 꼭 포장대 위로 이동하여 놓아주세요";
const page8 = "포장대로 이동한 상품과 가격을 확인하고 결제하기를 눌러 주세요.";
const page9 = "포인트 적립 및 사용 화면입니다. 실습에서는 휴대폰 번호를 이용해 포인트를 적립하겠습니다. 휴대폰 번호 입력을 눌러주세요.";
const page10 = "휴대폰 번호를 입력하겠습니다. 휴대폰 번호를 입력하고 엔터 또는 확인을 눌러주세요.";
const page11 = "휴대폰번호가 입력되었습니다. 확인을 눌러 포인트 적립을 완료해 주세요.";
const page12 = "입력한 번호와 함께 회원 정보를 확인할 수 있습니다. 포인트 적립을 완료하고, 쇼핑하기를 눌러 다음으로 이동해 주세요.";
const page13 = "물건 값 1,200원을 결제할 수단을 선택해 주세요. 실습에서는 신용 카드로 결제하겠습니다. 신용 카드 버튼을 눌러 주세요.";
const page14 = "결제할 카드를 꺼내 카드 투입구에 넣어 주세요";
const page15 = "카드의 IC칩이 인식될 수 있도록, 투입구 끝까지 밀어 넣어 주세요.";
const page16 = "승인 중입니다. 카드가 승인되고 결제 완료 화면이 나올 때까지 카드를 빼지 말고 기다려 주세요. 결제 과정에서 모니터에 나오는 지시 사항을 잘 확인해서 대응해주세요. 카드를 인식하지 못하는 경우 카드를 뺐다가 다시 넣어주시면 됩니다. 화면을 눌러서 다음으로 이동해 주세요.";
const page17 = "결제가 완료되었습니다. 결제 완료 화면을 확인하고 화면을 눌러서 다음으로 이동해 주세요.";
const page18 = "종이 영수증 여부를 선택해 주세요. 실습에서는 영수증을 받겠습니다. '예' 버튼을 눌러주세요.";
const page19 = "영수증이 출력 중입니다. 기다려 주세요. 화면을 눌러서 다음으로 진행해주세요.";
const page20 = "셀프 계산대 쇼핑이 완료되었습니다. 카드와 상품, 영수증을 잘 챙겨 주세요.";

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


const inputPage = [
    { page: 9, correctAnswer: "숫자 10~11자리" },
];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            let typeofAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    typeofAnswer = Number(this.value);
                    if (pageNumber === 9) {
                        if (8 <= this.value.length && this.value.length <= 12 && isNaN(typeofAnswer) === false) {
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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate3 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate4 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate5 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate6 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate7 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
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
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate15 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate16 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};


const coordinate17 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};


const coordinate18 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};


const coordinate19 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};


const coordinate20 = {
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
    coordinate19,
    coordinate20
);
