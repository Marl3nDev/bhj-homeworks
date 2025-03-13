document.addEventListener("DOMContentLoaded", function () {
    let countdownElement = document.getElementById("timer");
    let timeInSeconds = parseInt(countdownElement.textContent, 10);
    
    function startCountdown() {
        let interval = setInterval(function () {
            if (timeInSeconds > 0) {
                timeInSeconds--; 
                countdownElement.textContent = timeInSeconds;
            } else {
                clearInterval(interval);
                alert("Вы победили в конкурсе!");
            }
        }, 1000); 
    }

    startCountdown();
});
