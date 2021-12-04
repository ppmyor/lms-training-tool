const pageNum = 22;
const pageName = "SD25";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "간편 인증 및 인증서 발급을 위한 패스 앱 실습입니다. 패스 앱은 통신사에서 제공하는 서비스로, 이용 중인 통신사의 패스 앱을 설치해야만 이용이 가능합니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page2 = "최초 패스 앱을 실행하면 간편 본인확인 정보를 등록합니다. 이름과 주민등록번호 앞자리, 주민등록번호 뒤 첫 자리, 그리고 휴대폰 번호가 필요합니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page3 = "실습에서 입력한 정보는 저장 및 전송되지 않습니다. 간편 본인확인 정보 등록에서 이름을 입력하고 엔터 또는 확인을 눌러주세요.";
const page4 = "주민등록번호 앞자리 (생년월일 6자리)를 입력하고 엔터 또는 확인을 눌러주세요.";
const page5 = "주민등록번호 뒤 첫 자리를 입력하고 엔터 또는 확인을 눌러주세요.";
const page6 = "휴대폰 번호를 입력하고 엔터 또는 확인을 눌러주세요.";
const page7 = "본인 확인을 위한 정보 입력이 완료되었습니다. 화면 하단 검은색 다음 버튼을 눌러주세요.";
const page8 = "패스 앱 사용을 위한 필수 동의 항목과 선택 동의 항목이 있습니다. 실습에서는 'PASS 필수 항목 모두 동의' 왼쪽 체크 표시를 눌러주세요.";
const page9 = "PASS 필수 항목 모두 동의에 체크되었습니다. 선택 항목은 체크하지 않겠습니다. 화면 하단 검은색 다음 버튼을 눌러주세요.";
const page10 = "인증 번호가 입력한 휴대폰 번호로 전송됩니다. 실습에서는 인증번호에 759774를 입력하고 엔터 또는 확인을 눌러주세요.";
const page11 = "인증번호가 입력되었습니다. 화면 하단 검은색 확인 버튼을 눌러주세요.";
const page12 = "인증 진행 중입니다. 인증이 완료되면 비밀번호 등록 화면으로 이동합니다. 실습에서는 화면을 눌러서 다음으로 진행해 주세요.";
const page13 = "패스 앱을 실행하고 간편 인증을 진행할 때, 비밀번호 입력을 통해 인증이 완료됩니다. 따라서 사용할 비밀번호 설정이 필요합니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page14 = "비밀번호는 개인정보가 포함되거나 쉽게 예상할 수 없는 비밀번호를 설정해주세요.  실습에서는 202112를 비밀번호로 설정하겠습니다. 설정할 비밀번호 첫 번째 자리, 2를 입력해 주세요.";
const page15 = "두 번째 자리 0을 입력해 주세요.";
const page16 = "세 번째 자리 2를 입력해 주세요.";
const page17 = "네 번째 자리 1을 입력해 주세요.";
const page18 = "다섯 번째 자리 1을 입력해 주세요.";
const page19 = "여섯 번째 자리 2를 입력해 주세요.";
const page20 = "비밀번호를 한 번 더 입력합니다. 반드시 처음 입력 한 비밀번호를 한 번 더 입력해야 합니다. 실습에서 설정한 비밀번호 202112의 첫 번째 자리, 2를 입력해 주세요.";
const page21 = "두 번째 자리 0을 입력해 주세요.";
const page22 = "세 번째 자리 2를 입력해 주세요.";
const page23 = "네 번째 자리 1을 입력해 주세요.";
const page24 = "다섯 번째 자리 1을 입력해 주세요.";
const page25 = "여섯 번째 자리 2를 입력해 주세요.";
const page26 = "입력하신 6자리 비밀번호가 설정되었고, 패스 가입이 완료되었습니다.";

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
