document.addEventListener("DOMContentLoaded", function() {
    const cookie = document.getElementById("cookie");
    const clickerCounter = document.getElementById("clicker__counter");

    let clicks = parseInt(clickerCounter.textContent, 10);
    let currentWidth = cookie.width;
    let currentHeight = cookie.height;

    function handleClick() {
        clicks++;
        clickerCounter.textContent = clicks;

        if (currentWidth === 200) {
            currentWidth = 220; 
            currentHeight = 220;
        } else {
            currentWidth = 200;
            currentHeight = 200;
        }

        cookie.width = currentWidth;
        cookie.height = currentHeight;
    }

    cookie.addEventListener("click", handleClick);
});
