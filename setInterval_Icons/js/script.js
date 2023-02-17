const icons = document.querySelectorAll(".container i");
let i = 1;
function showIcons() {
    i++;
    const icon = document.querySelector("i.change");
    icon.classList.remove("change");

    if(i > icons.length) {
        icons[0].classList.add("change");
        i = 1;
    } else {
        icon.nextElementSibling.classList.add("change");
    }
};

setInterval(showIcons, 1000);