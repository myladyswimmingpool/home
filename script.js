document.querySelectorAll('.nav-link').forEach(link => {
    const body = document.body;
    link.addEventListener('click', () => {
        document.getElementById('check').checked = false;
        body.classList.remove('menu-open');
    });
});

// document.querySelectorAll('.social-links a').forEach(link => {
//     link.addEventListener('click', function() {
//         this.classList.add('clicked');
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const checkBtn = document.getElementById('check');
    const body = document.body;

    checkBtn.addEventListener('change', function () {
        if (checkBtn.checked) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    });
});

let slideIndex = 0;
let autoSlideTimeout;

showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) {slideIndex = slides.length}

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    autoSlideTimeout = setTimeout(showSlides, 3000); // Change image every 5 seconds
}

function plusSlides(n) {
    slideIndex += n-1;
    console.log("after",slideIndex);
    resetAutoSlide();
    showSlides();
}

function currentSlides(n) {
    slideIndex = n-1;
    resetAutoSlide();
    showSlides();
    
}

function resetAutoSlide() {
    clearTimeout(autoSlideTimeout);
    // autoSlideTimeout = setTimeout(showSlides, 5000); // Restart the auto slide
}
