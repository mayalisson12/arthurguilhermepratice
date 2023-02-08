const productCard = document.querySelectorAll(".productCard");
const preBtn = document.querySelector(".preBtn");
const nextBtn = document.querySelector(".nextBtn");
const sizeCard = productCard[1].offsetWidth;


nextBtn.addEventListener("click", moveToRight)

function moveToRight(card) {
    card.scrollLeft +=sizeCard;
};

function moveToRight(card) {
    card.scrollLeft +=sizeCard;
}

//9:56