document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");
    if (window.innerWidth <= 991) {
      {
        logo.src = "assets/images/logo-black-text.webp";
      }
    }

    if (window.innerWidth >= 991) {
      if (window.scrollY >= 50) {
        navbar.classList.add("scrolled", "navbar-light");
        logo.src = "assets/images/logo-black-text.webp";
      } else {
        navbar.classList.remove("scrolled", "navbar-light");
        logo.src = "assets/images/logo-white-text.webp";
      }
    }
  });
  // Lazy loading
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Use data-src for lazy loading
        observer.unobserve(img); // Stop observing once loaded
      }
    });
  });

  lazyImages.forEach((img) => {
    observer.observe(img);
  });
});
console.log("pass");
// Toggle descriptions
function toggleDescription(header) {
  const description = header.nextElementSibling;
  const arrow = header.querySelector(".arrow");

  description.classList.toggle("show");
  header.classList.toggle("active");
}
