document.addEventListener("DOMContentLoaded", function () {
  const carousel1 = document.getElementById("carousel1");
  const carousel2 = document.getElementById("carousel2");

  carousel1.addEventListener("mouseenter", function () {
    bootstrap.Carousel.getInstance(carousel2).pause();
  });

  carousel1.addEventListener("mouseleave", function () {
    bootstrap.Carousel.getInstance(carousel2).cycle();
  });
  carousel2.addEventListener("mouseenter", function () {
    bootstrap.Carousel.getInstance(carousel1).pause();
  });

  carousel2.addEventListener("mouseleave", function () {
    bootstrap.Carousel.getInstance(carousel1).cycle();
  });
  // Get the reference to the large image
  const smallText = document.getElementById("smallText");
  const largImage = document.getElementById("largeImage");

  // Listen for scroll event
  window.addEventListener("scroll", function () {
    // Calculate the scaling factor based on the scroll position
    const scaleFactor = 1 - window.scrollY / 5000; // Adjust the divisor for desired sensitivity
    const scaleLarge = 1 + window.scrollY / 5000;
    // Apply the scaling transformation to the image
    smallText.style.transform = `scale(${scaleFactor})`;
    largImage.style.transform = `scale(${scaleLarge})`;
  });
});
