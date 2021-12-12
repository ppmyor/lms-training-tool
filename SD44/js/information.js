const pageNum = 15;
const pageName = "SD44";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.wav`);
    audioArray.push(audio);
}

const page1 = "디지털 범죄 - 보이스피싱 O.X. 퀴즈";
const page2 = "통화를 듣고 보이스피싱을 찾아주세요. 화면을 눌러서 다음으로 진행해 주세요.";
const page3 = "1번 통화 듣기 버튼을 누르면 통화 재생이 시작됩니다.";
const page4 = "디지털 범죄 보이스피싱 1번 통화가 재생 중입니다.";
const page5 = "1번 통화는 보이스 피싱입니다.";
const page6 = "2번 통화 듣기 버튼을 누르면 통화 재생이 시작됩니다.";
const page7 = "디지털 범죄 보이스피싱 2번 통화가 재생 중입니다.";
const page8 = "2번 통화는 보이스 피싱입니다.";
const page9 = "3번 통화 듣기 버튼을 누르면 통화 재생이 시작됩니다.";
const page10 = "디지털 범죄 보이스피싱 3번 통화가 재생 중입니다.";
const page11 = "3번 통화는 보이스 피싱입니다.";
const page12 = "4번 통화 듣기 버튼을 누르면 통화 재생이 시작됩니다.";
const page13 = "디지털 범죄 보이스피싱 4번 통화가 재생 중입니다.";
const page14 = "4번 통화는 보이스 피싱입니다.";
const page15 = "준비한 퀴즈를 모두 완료하셨습니다. 감사합니다.";

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
    page15
);


const inputPage = [{ page: null, correctAnswer: null }];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 15) {
                    if (this.value === answer) {
                        handleClickBox();
                    } else if (this.value !== answer) {
                        alert(RETRY_MESSAGE);
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
    coordinate15
);
