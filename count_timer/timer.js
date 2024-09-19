let countdown;
let seconds = 0; 
let isRunning = false;

function start() {
    if (!isRunning) {
        const input = document.getElementById("inputTime").value;
        if (input && !isNaN(input)) {
            seconds = parseInt(input); 
            if (seconds > 0) {
                countdown = setInterval(updateTimer, 1000);
                isRunning = true; 
            }
        } else {
            alert("Please enter a valid number of seconds.");
        }
    }
}
function stop() {
    clearInterval(countdown);
    isRunning = false;
}

function reset() {
    clearInterval(countdown);
    isRunning = false; 
    seconds = 0; 
    displayTime(); 
    document.getElementById("inputTime").value = ""; 
}

function updateTimer() {
    if (seconds > 0) {
        seconds--; 
        displayTime(); 
    } else {
        clearInterval(countdown); 
        isRunning = false; 
        alert("Time's up!"); 
    }
}

function displayTime() {
    const hours = Math.floor(seconds / 3600); 
    const minutes = Math.floor((seconds % 3600) / 60); 
    const secs = seconds % 60;
    document.getElementById("timer").textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}