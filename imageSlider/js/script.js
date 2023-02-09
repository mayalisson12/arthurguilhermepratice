const productContainer = document.querySelectorAll(".productContainer");
const prevBtn = document.querySelectorAll(".prevBtn");
const nextBtn = document.querySelectorAll(".nextBtn");

productContainer.forEach((card, i) => {
    let containerDimensions = card.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener("click", () => {
        card.scrollLeft += containerWidth;
    })

    prevBtn[i].addEventListener("click",() => {
        card.scrollLeft -= containerWidth;
    })
});
   
//9:56