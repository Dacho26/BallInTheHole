let ball = document.querySelector(".ball");
let area = document.querySelector("#area");
let panel = document.querySelector("p a");
let active = false;
let time = 0;
let idI;

let maxX = area.clientWidth - ball.clientWidth;
let maxY = area.clientHeight - ball.clientHeight;

const handleOrientation = () => {
    let beta = event.beta;
    let gamma = event.gamma;

    if (beta > 90) {
        beta = 90;
    }
    if (beta < -90) {
        beta = -90;
    }
    beta += 90;
    gamma += 90;

    ball.style.top = (maxX * beta / 180 - 15) + "px";
    ball.style.left = (maxY * gamma / 180 - 15) + "px";

}
const timer = () => {
    if (!active) {
        active = !active;
        idI = setInterval(start, 10);
    } else {
        active = !active;
        clearInterval(idI);
    }
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}
const stop = () => {
    time = 0;
    active = false;

    clearInterval(idI);
}

window.addEventListener("deviceorientation", timer)
window.addEventListener("deviceorientation", handleOrientation)