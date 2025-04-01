document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".rotator").forEach(rotator => {
        let cases = Array.from(rotator.querySelectorAll(".rotator__case"));
        let index = 0;

        function rotate() {
            let current = cases[index];
            current.classList.remove("rotator__case_active");
            index = (index + 1) % cases.length;
            let next = cases[index];
            next.classList.add("rotator__case_active");
            next.style.color = next.dataset.color;
            setTimeout(rotate, next.dataset.speed);
        }
        
        setTimeout(rotate, cases[index].dataset.speed);
    });
});