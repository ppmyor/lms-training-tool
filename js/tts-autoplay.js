const buttonClicked = document.querySelector(".next-page-btn");

let variable = 0;

buttonClicked.addEventListener("click", function () {
    if (variable === 0) {
        document.getElementById("working-space").src = "./content-1.html";
        const audio1 = new Audio("./assets/ex-audio.wav");
        audio1.play();
        audio1.autoplay;
        variable++;
    } else {
        console.log("done");
    }
});
