let ball = document.querySelector(".ball");
let area = document.querySelector("#area");

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

window.addEventListener("deviceorientation", handleOrientation)