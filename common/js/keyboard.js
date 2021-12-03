/* [html 최초 로드 및 이벤트 상시 대기 실시] */
window.onload = function () {
    console.log("");
    console.log("[window onload] : [start]");
    console.log("");

    /* height 값 px 조정 실시 : 가상 키보드 활성 시 ui 밀림 방지 */
    reSizeHeight();
};

/* [각 컨테이너 크기 높이 사이즈 px로 다시 설정] */
function reSizeHeight() {
    console.log("");
    console.log("[reSizeHeight] : [start]");
    console.log("");

    // 특정 객체 id 값 사용해 height 값 확인 및 px 설정
    var containerDiv_height = window.getComputedStyle(document.getElementById("containerDiv")).height; //px height 값 확인
    document.getElementById("containerDiv").style.height = containerDiv_height; //px 값으로 height 지정
    console.log("");
    console.log("[reSizeHeight] : [containerDiv_height] : " + containerDiv_height);
    console.log("");

    // 객체 class 값 사용해 height 값 확인 및 px 설정
    var containerClass_height = $(".containerClass").height();
    containerClass_height = containerClass_height + "px"; //px height 값 확인
    $(".containerClass").css("height", containerClass_height); //px 값으로 height 지정
    console.log("");
    console.log("[reSizeHeight] : [containerClass_height] : " + containerClass_height);
    console.log("");

    // display none 상태인 팝업창 height 값 확인 및 px 설정
    var containerPopup_height = $("#containerPopup").height();
    containerPopup_height = containerPopup_height + "px"; //px height 값 확인
    $("#containerPopup").css("height", containerPopup_height); //px 값으로 height 지정
    console.log("");
    console.log("[reSizeHeight] : [containerPopup_height] : " + containerPopup_height);
    console.log("");
}
