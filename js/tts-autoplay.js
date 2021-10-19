const nextButton = document.querySelector(".next-page-btn");
const pauseButton = document.querySelector(".pause-button");
const playButton = document.querySelector(".play-button");
const volumeUpButton = document.querySelector(".volume-up");
const volumeDownButton = document.querySelector(".volume-down");

let pageVariable = 0;
let volumeVariable = 0.5;

const audio = new Audio("./assets/ex-audio.wav");

nextButton.addEventListener("click", function () {
    if (pageVariable === 0) {
        document.getElementById("working-space").src = "./content-1.html";
        audio.volume = volumeVariable;
        audio.play();
        audio.autoplay;
        pageVariable++;
    } else {
        console.log("done");
    }
});

pauseButton.addEventListener("click", function () {
    audio.pause();
});

playButton.addEventListener("click", function () {
    audio.play();
});

volumeUpButton.addEventListener("click", function () {
    volumeVariable = volumeVariable + 0.1;
    if (volumeVariable < 1.0) {
        audio.volume = volumeVariable;
        console.log(volumeVariable);
    } else {
        console.log("maxVolume");
    }
});

volumeDownButton.addEventListener("click", function () {
    volumeVariable = volumeVariable - 0.1;
    if (volumeVariable > 0) {
        audio.volume = volumeVariable;
        console.log(volumeVariable);
    } else {
        console.log("minVolume");
    }
});
