const imageElements = document.querySelectorAll(".imgslide");
const imagePaths = Array.from(imageElements).map(img => img.src);
let currentIndex = 0;

imageElements.forEach((img, index) => {
    img.addEventListener("click", () => {
        openLightbox();
        showSlide(index);
    });
});

function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showSlide(index) {
    currentIndex = index;
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = imagePaths[currentIndex];
}

function changeSlide(n) {
    currentIndex = (currentIndex + n + imagePaths.length) % imagePaths.length;
    showSlide(currentIndex);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") changeSlide(1);
    if (e.key === "ArrowLeft") changeSlide(-1);
});

document.getElementById('inquiry-form').addEventListener('submit', function (e) {
 e.preventDefault(); // Prevent actual form submission
  const status = document.getElementById('form-status');
  status.textContent = 'Thank you! Your message has been sent.';
  status.style.color = 'orange';

  // Clear the form
  this.reset();
});

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('dark-mode-toggle');
  toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  });
});