const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

images.forEach((img, i) => {
  img.onclick = () => {
    current = i;
    openLightbox();
  };
});

function openLightbox() {
  lightbox.style.display = "flex";
  lightboxImg.src = images[current].src;
}

closeBtn.onclick = () => lightbox.style.display = "none";
nextBtn.onclick = () => { current = (current + 1) % images.length; openLightbox(); };
prevBtn.onclick = () => { current = (current - 1 + images.length) % images.length; openLightbox(); };

function scrollToGallery() {
  document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
}
