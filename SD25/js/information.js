const pageNum = 22;
const pageName = "SD25";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "이번 시간에는 간편인증을 위해 패스 인증서 발급을 실습하겠습니다. 패스앱은 통신사에서 제공하는 인증 서비스입니다. 금융기관 및 공공기관에서 본인 확인 시 간편하게 사용 할 수 있습니다. 패스앱을 실행을 위하여, 화면을 눌러 다음 화면으로 진행해주세요.";
const page2 =
    "본인 인증을 위해 본인 확인 정보를 등록하겠습니다. 이름과 주민등록번호 앞자리, 주민등록번호 뒤 첫 자리, 그리고 휴대폰 번호 입력이 필요합니다. 실습에서는 이름은 김서울, 주민등록번호 정보는 4 8 0 1 0 1, 주민등록번호 뒷자리 첫 번째에는 1, 그리고 전화번호는  010,1234,5678 을 입력하겠습니다. 화면을 눌러서 다음 단계로 진행해주세요.";
const page3 =
    "본인 확인 정보 입력을 완료하고, 입력 정보가 제시된 정보와 다르면 진행되지 않습니다. 입력된 정보를 확인해주세요. 확인하시고, 화면 하단 검은색 다음 버튼을 눌러주세요.";
const page4 =
    "패스앱을 사용하기 위해서 동의해야 하는 필수 항목과 선택 항목이 있습니다. 실습에서는 필수 항목만 체크하고, 광고성 정보 수신 동의와 개인정보 수집 및 이용 동의와 같은 선택 항목은 체크하지 않도록 하겠습니다. 필수 항목 옆에 체크 표시를 눌러주세요.";
const page5 =
    "패스 필수 항목 모두 동의에 체크가 되었습니다. 선택 항목은 체크하지 않고 화면 하단 검은색 다음 버튼을 눌러주세요.";
const page6 =
    "문자로 인증 번호가 인증 시 입력한 휴대폰 번호로 전송되었습니다. 인증 번호가 제대로 전송되지 않았다면 재전송을 누르면 다시 받을 수 있습니다. 인증번호에 7 5 9 7 7 4 를 입력해주세요.";
const page7 = "인증번호에 7 5 9 7 7 4 를 입력되었습니다. 화면 하단 검은색 확인 버튼을 눌러주세요.";
const page8 =
    "인증 진행 중입니다. 인증이 완료되면 비밀번호 등록 화면으로 이동합니다. 실습에서는 화면을 눌러 다음으로 진행해주세요.";
const page9 =
    "금융기관 및 공공기관 또는 각종 온라인 사이트에서 패스앱을 사용해 간편 인증을 진행할 때 비밀번호 입력을 통해 인증이 완료됩니다. 따라서 사용할 비밀번호 설정이 필요합니다. 앱을 실행할 때 그리고 인증을 진행할 때 필요한 비밀번호이기 때문에 신중하게 비밀번호를 결정해야 합니다. 화면을 눌러서 다음 화면으로 이동해주세요.";
const page10 =
    "이번 실습에서 비밀번호는 2 0 2 1 1 2를 입력하겠습니다. 숫자 자판을 이용해서 2 0 2 1 1 2의 첫 번째 자리 2를 입력해주세요.";
const page11 =
    "이번 실습에서 비밀번호는 2 0 2 1 1 2를 입력하겠습니다. 숫자 자판을 이용해서 2 0 2 1 1 2의 두 번째 자리 0를 입력해 주세요.";
const page12 =
    "이번 실습에서 비밀번호는 2 0 2 1 1 2를 입력하겠습니다. 숫자 자판을 이용해서 2 0 2 1 1 2의 세 번째 자리 2를 입력해 주세요.";
const page13 =
    "이번 실습에서 비밀번호는 2 0 2 1 1 2를 입력하겠습니다. 숫자 자판을 이용해서 2 0 2 1 1 2의 네 번째 자리 1을 입력해 주세요.";
const page14 =
    "이번 실습에서 비밀번호는 2 0 2 1 1 2를 입력하겠습니다. 숫자 자판을 이용해서 2 0 2 1 1 2의 다섯 번째 자리 1을 입력해 주세요.";
const page15 =
    "이번 실습에서 비밀번호는 2 0 2 1 1 2를 입력하겠습니다. 숫자 자판을 이용해서 2 0 2 1 1 2의 여섯 번째 자리 2를 입력해 주세요.";
const page16 =
    "비밀번호를 한 번 더 입력하는 단계입니다. 반드시 처음 입력 한 비밀번호와 같은 비밀번호를 한 번 더 입력해 주셔야 합니다. 숫자 자판을 이용해서 처음 입력한 비밀번호 2 0 2 1 1 1 2의 첫 번째 자리 2를 입력해 주세요.";
const page17 = "숫자 자판을 이용해서 처음 입력한 비밀번호 2 0 2 1 1 1 2의 두 번째 자리 0를 입력해 주세요.";
const page18 = "숫자 자판을 이용해서 처음 입력한 비밀번호 2 0 2 1 1 1 2의 세 번째 자리 2를 입력해 주세요.";
const page19 = "숫자 자판을 이용해서 처음 입력한 비밀번호 2 0 2 1 1 1 2의 네 번째 자리 1을 입력해 주세요.";
const page20 = "숫자 자판을 이용해서 처음 입력한 비밀번호 2 0 2 1 1 1 2의 다섯 번째 자리 1을 입력해 주세요.";
const page21 = "숫자 자판을 이용해서 처음 입력한 비밀번호 2 0 2 1 1 1 2의 여섯 번째 자리 2를 입력해 주세요.";
const page22 = "입력하신 6자리 비밀번호가 설정되었고, 패스 가입이 완료되었습니다. 이상으로 실습을 마치겠습니다.";

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
    page22
);

const inputPage = [{ page: 5, correctAnswer: "759774" }];

const coordinate1 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0.0226628895184136,
    startRateY: 0.13129770992366413,
    endRateX: 0.9745042492917847,
    endRateY: 0.5572519083969466,
};

const coordinate3 = {
    startRateX: 0.056657223796033995,
    startRateY: 0.8946564885496183,
    endRateX: 0.9461756373937678,
    endRateY: 0.9725190839694656,
};

const coordinate4 = {
    startRateX: 0.042492917847025496,
    startRateY: 0.5984732824427481,
    endRateX: 0.1359773371104816,
    endRateY: 0.648854961832061,
};

const coordinate5 = {
    startRateX: 0.053824362606232294,
    startRateY: 0.9007633587786259,
    endRateX: 0.9461756373937678,
    endRateY: 0.9801526717557252,
};

const coordinate6 = {
    startRateX: 0.05099150141643059,
    startRateY: 0.1480916030534351,
    endRateX: 0.830028328611898,
    endRateY: 0.20305343511450383,
};

const coordinate7 = {
    startRateX: 0.053824362606232294,
    startRateY: 0.8931297709923665,
    endRateX: 0.9461756373937678,
    endRateY: 0.9725190839694656,
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
    startRateX: 0.6685552407932012,
    startRateY: 0.6977099236641221,
    endRateX: 1,
    endRateY: 0.7725190839694657,
};

const coordinate11 = {
    startRateX: 0.6657223796033994,
    startRateY: 0.8473282442748091,
    endRateX: 1,
    endRateY: 0.9282442748091603,
};

const coordinate12 = {
    startRateX: 0.6685552407932012,
    startRateY: 0.6977099236641221,
    endRateX: 1,
    endRateY: 0.7725190839694657,
};

const coordinate13 = {
    startRateX: 0.3286118980169972,
    startRateY: 0.7709923664122137,
    endRateX: 0.6713881019830028,
    endRateY: 0.850381679389313,
};

const coordinate14 = {
    startRateX: 0.3286118980169972,
    startRateY: 0.7709923664122137,
    endRateX: 0.6713881019830028,
    endRateY: 0.850381679389313,
};

const coordinate15 = {
    startRateX: 0.6685552407932012,
    startRateY: 0.6977099236641221,
    endRateX: 1,
    endRateY: 0.7725190839694657,
};

const coordinate16 = {
    startRateX: 0.6628895184135978,
    startRateY: 0.7725190839694657,
    endRateX: 1,
    endRateY: 0.8519083969465648,
};

const coordinate17 = {
    startRateX: 0.3314447592067989,
    startRateY: 0.7725190839694657,
    endRateX: 0.6685552407932012,
    endRateY: 0.8519083969465648,
};

const coordinate18 = {
    startRateX: 0.6628895184135978,
    startRateY: 0.7725190839694657,
    endRateX: 1,
    endRateY: 0.8519083969465648,
};

const coordinate19 = {
    startRateX: 0.3286118980169972,
    startRateY: 0.6946564885496184,
    endRateX: 0.6713881019830028,
    endRateY: 0.7755725190839695,
};

const coordinate20 = {
    startRateX: 0.3286118980169972,
    startRateY: 0.6946564885496184,
    endRateX: 0.6713881019830028,
    endRateY: 0.7755725190839695,
};

const coordinate21 = {
    startRateX: 0.6628895184135978,
    startRateY: 0.7725190839694657,
    endRateX: 1,
    endRateY: 0.8519083969465648,
};

const coordinate22 = {
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
    coordinate20,
    coordinate21,
    coordinate22
);
