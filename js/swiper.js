var swiper = new Swiper(".testimonial-carousel", {
  loop: true,
  slidesPerView: 1, // Default to 1 slide per view
  centeredSlides: true, // Ensures the active slide is always centered
  spaceBetween: 20, // Add some spacing between slides
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1, // Keep single slide for tablets
    },
    1024: {
      slidesPerView: 1, // Maintain single slide for desktops
    },
  },
});
