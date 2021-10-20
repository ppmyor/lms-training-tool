const contentsDesc = document.querySelector(".content-desc");

const fontResizeSmall = document.querySelector(".small");
const fontResizeMedium = document.querySelector(".medium");
const fontResizeLarge = document.querySelector(".large");

fontResizeSmall.addEventListener("click", function () {
    contentsDesc.style.fontSize = "0.8em";
});

fontResizeMedium.addEventListener("click", function () {
    contentsDesc.style.fontSize = "1em";
});

fontResizeLarge.addEventListener("click", function () {
    contentsDesc.style.fontSize = "1.3em";
});
