const startStopBtn = document.querySelector("startStopBtn");
const resetBtn = document.querySelector('resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let loadingSeconds = 0;
let loadingMinutes = 0;
let loadingHours = 0;

function stopWatch() {

    seconds++
    if(seconds /60 === 1 ){
        seconds = 0;
        minutes++;

        if(minutes / 60 ===1) {
            minutes = 0;
            hours++;
        }
    }
    let displayTimer = document.getElementById("timer");
    displayTimer.innerText = hours + ":" + minutes + ":" + seconds;
    
}

window.setInterval (stopWatch,1000)