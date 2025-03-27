const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function(dropdown) {
    const dv = dropdown.querySelector(".dropdown__value");
    const dl = dropdown.querySelector(".dropdown__list");
    const di = dropdown.querySelectorAll(".dropdown__item");

    dv.addEventListener("click", function() {
        dl.classList.toggle("dropdown__list_active");
    });

    di.forEach(function(item) {
        item.addEventListener("click", function(event) {
            dv.textContent = this.textContent;
            dl.classList.remove("dropdown__list_active");
            event.preventDefault();
        });
    });
});
