const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slider img");
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

nextBtn.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});

// Automatic slide change (optional)
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Change slide every 3 seconds (adjust timing as needed)
setInterval(autoSlide, 3000);

// Initial slide display
showSlide(slideIndex);