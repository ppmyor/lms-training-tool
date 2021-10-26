const mobileFullScreenButton = document.querySelector(".mobile-full-screen-button");
const expandIcon = document.querySelector("fa-expand");
const compressIcon = document.querySelectorAll("fa-compress");

fullScreenButton.addEventListener("click", function () {
    if (!document.fullscreenElement) {
        fullScreen(document.body);
        fullScreenButton.innerText = "종료";
    } else if (document.exitFullscreen) {
        exitFullScreen();
        fullScreenButton.innerText = "전체화면";
    }
});

mobileFullScreenButton.addEventListener("click", function () {
    if (!document.fullscreenElement) {
        fullScreen(document.body);
    } else if (document.exitFullscreen) {
        exitFullScreen();
    }
});

const fullScreen = (element) => {
    if (element.requestFullscreen) return element.requestFullscreen();
    if (element.webkitRequestFullscreen) return element.webkitRequestFullscreen();
    if (element.mozRequestFullScreen) return element.mozRequestFullScreen();
    if (element.msRequestFullscreen) return element.msRequestFullscreen();
};

const exitFullScreen = () => {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.webkitCancelFullscreen) return document.webkitCancelFullscreen();
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
};
