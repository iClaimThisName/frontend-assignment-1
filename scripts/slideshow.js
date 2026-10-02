let slideIndex = 1;
showSlide(slideIndex);

function updateSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  const images = document.querySelectorAll(".slide-images");
  const titles = document.querySelectorAll(".slide-titles");
  const texts = document.querySelectorAll(".slide-texts");
  const indicators = document.querySelectorAll(".slide-indicators");

  if (n > images.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = images.length;
  }

  images.forEach((image) => {
    image.style.display = "none";
  });
  images[slideIndex - 1].style.display = "block";

  titles.forEach((title) => {
    title.style.display = "none";
  });
  titles[slideIndex - 1].style.display = "block";

  texts.forEach((text) => {
    text.style.display = "none";
  });
  texts[slideIndex - 1].style.display = "block";

  indicators.forEach((indicator) => {
    indicator.style.display = "none";
  });
  indicators[slideIndex - 1].style.display = "block";
}
