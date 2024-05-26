let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let time = document.getElementById("time");

let setTime;

function startTime() {
    clearInterval(setTime);
    setTime = setInterval(currentTimeFunc, 1000);
}

function stopTime() {
    clearInterval(setTime);
}

function currentTimeFunc() {
    let currentTime = new Date();
    currentTime = currentTime.toLocaleTimeString();
    time.textContent = currentTime;
}

startBtn.addEventListener("click", startTime);
stopBtn.addEventListener("click", stopTime);


currentTimeFunc();