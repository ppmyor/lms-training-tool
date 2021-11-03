const drawCanvas = document.getElementById("draw-canvas");
const drawContext = drawCanvas.getContext("2d");
const drawGround = document.getElementById("draw-box");

const paintedCanvas = document.getElementById("painted-canvas");
const paintedContext = paintedCanvas.getContext("2d");
const paintGround = document.getElementById("painted-box");

const drawWidth = drawGround.clientWidth;
const drawHeight = drawGround.clientHeight;
drawCanvas.width = drawWidth;
drawCanvas.height = drawHeight;
drawContext.lineWidth = 2;
drawContext.strokeStyle = "#131313";

const paintedWidth = paintGround.clientWidth;
const paintedHeight = paintGround.clientHeight;
paintedCanvas.width = paintedWidth;
paintedCanvas.height = paintedHeight;
paintedContext.lineWidth = 2;
paintedContext.fillStyle = "rgba(200, 124, 124, 0.5)";

let isDown = false;
let data = [];
let rateData = [];

drawCanvas.addEventListener("mousedown", function (event) {
    handleMouseDown(event);
    data.push({ startX: startX, startY: startY });
});

drawCanvas.addEventListener("mousemove", function (event) {
    handleMouseMove(event);
});

drawCanvas.addEventListener("mouseup", function (event) {
    handleMouseUp(event);
    data.push({ endX: endX, endY: endY });
});

function handleMouseDown(event) {
    startX = event.offsetX;
    startY = event.offsetY;
    isDown = true;
}

function handleMouseMove(event) {
    if (!isDown) {
        return;
    }
    let nowX = event.offsetX;
    let nowY = event.offsetY;
    handleDraw(nowX, nowY);
    handlePaint(nowX, nowY);
}

function handleMouseUp(event) {
    endX = event.offsetX;
    endY = event.offsetY;
    isDown = false;
}

function rateCalcurate(currentX, currentY) {
    startRateX = (startX / drawWidth) * paintedWidth;
    startRateY = (startY / drawHeight) * paintedHeight;
    currentRateX = (currentX / drawWidth) * paintedWidth;
    currentRateY = (currentY / drawHeight) * paintedHeight;
}

function handleDraw(currentX, currentY) {
    drawContext.clearRect(0, 0, drawContext.canvas.width, drawContext.canvas.height);
    drawContext.strokeRect(startX, startY, currentX - startX, currentY - startY);
}

function handlePaint(currentX, currentY) {
    rateCalcurate(currentX, currentY);
    paintedContext.clearRect(0, 0, paintedContext.canvas.width, paintedContext.canvas.height);
    paintedContext.fillRect(startRateX, startRateY, currentRateX - startRateX, currentRateY - startRateY);
}
