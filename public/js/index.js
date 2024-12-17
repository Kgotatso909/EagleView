window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.innerWidth >= 994) {
    if (window.scrollY >= 50) {
      navbar.classList.add("scrolled", "navbar-light");
    } else {
      navbar.classList.remove("scrolled", "navbar-light");
    }
  }
});

// Toggle descriptions
function toggleDescription(header) {
  const description = header.nextElementSibling;
  const arrow = header.querySelector(".arrow");

  description.classList.toggle("show");
  header.classList.toggle("active");
}

// Lazy loading
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

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
