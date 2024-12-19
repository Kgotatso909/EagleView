document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector('.form-container');
  const mapContainer = document.querySelector('.map-container');

  const setMapHeight = () => {
    const formHeight = contactForm.offsetHeight;
    mapContainer.style.height = `${formHeight}px`;
  };

  // Set the map height when the page loads
  setMapHeight();

  // Optional: Adjust height if window is resized
  window.addEventListener('resize', setMapHeight);

  // Show the toast if it exists in the URL fragment
  if (window.location.hash === '#submissionToast') {
    const toast = document.getElementById('submissionToast');
    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();
  }
});
