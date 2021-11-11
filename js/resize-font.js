const contentsDesc = document.querySelector(".content-desc");

const fontResizeSmall = document.querySelector(".small");
const fontResizeMedium = document.querySelector(".medium");
const fontResizeLarge = document.querySelector(".large");

fontResizeSmall.addEventListener("click", function () {
    contentsDesc.style.fontSize = "1em";
});

fontResizeMedium.addEventListener("click", function () {
    contentsDesc.style.fontSize = "1.2em";
});

fontResizeLarge.addEventListener("click", function () {
    contentsDesc.style.fontSize = "1.5em";
});
