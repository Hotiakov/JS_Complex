document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    let R1 = 300,
        R2 = 200,
        X0 = 500,
        Y0 = 300,
        counter = 0,
        moveInterval;
    const circleBlack = document.querySelector(".justBlackCircle");
    const circleGreen = document.querySelector(".justSmallGreenCircle");
    const startBtn = document.querySelector(".startBtn");
    const resetBtn = document.querySelector(".resetBtn");
    let startMove = function () {
        moveInterval = requestAnimationFrame(startMove);
        counter++;
        circleBlack.style.top = Y0 + R1 * Math.sin(counter / 3) + "px";
        circleBlack.style.left = X0 + R1 * Math.cos(counter / 3) + "px";
        circleGreen.style.top = Y0 + R2 * Math.sin(counter / 5) + "px";
        circleGreen.style.left = X0 + R2 * Math.cos(counter / 5) + "px";
    };

    let animate = false;
    startBtn.addEventListener("click", () => {
        if (!animate) {
            moveInterval = requestAnimationFrame(startMove);
            animate = true;
        }
        else {
            cancelAnimationFrame(moveInterval);
            animate = false;
        }
    });
    resetBtn.addEventListener("click", () => {
        animate = false;
        cancelAnimationFrame(moveInterval);
        circleBlack.style.top = "300px";
        circleBlack.style.left = "500px";
        circleGreen.style.top = "325px";
        circleGreen.style.left = "525px";
    });
});