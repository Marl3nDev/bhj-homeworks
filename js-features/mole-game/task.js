document.addEventListener("DOMContentLoaded", function () {
    const deadCounter = document.getElementById("dead"); 
    const lostCounter = document.getElementById("lost"); 
    const holes = document.querySelectorAll(".hole"); 

    let dead = 0; 
    let lost = 0;

    function randomHole() {
        for (let i = 0; i < holes.length; i++) {
            holes[i].classList.remove("hole_has-mole");
        }
        
        const randomIndex = Math.floor(Math.random() * holes.length);
        holes[randomIndex].classList.add("hole_has-mole");
    }

    function handleClick(event) {
        const hole = event.target;

        if (hole.classList.contains("hole_has-mole")) {
            dead++;
            deadCounter.textContent = dead;
        } else {
            lost++;
            lostCounter.textContent = lost;
        }

        if (dead === 10) {
            alert("Вы победили!");
            resetGame();
        } else if (lost === 5) {
            alert("Вы проиграли!");
            resetGame();
        } else {
            randomHole();
        }
    }

    function resetGame() {
        dead = 0;
        lost = 0;
        deadCounter.textContent = dead;
        lostCounter.textContent = lost;

        for (let i = 0; i < holes.length; i++) {
            holes[i].classList.remove("hole_has-mole");
        }
    }

    for (let i = 0; i < holes.length; i++) {
        holes[i].addEventListener("click", handleClick);
    }

    randomHole();
    setInterval(randomHole, 1000); 
});
