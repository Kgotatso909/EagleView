const bookingForm = document.getElementById("bookingForm");
// Booking: initialize the Date Picker
document.addEventListener("DOMContentLoaded", () => {
  flatpickr("#checkin", {
    minDate: "today",
    dateFormat: "Y-m-d",
    onChange: function (selectedDates, dateStr) {
      flatpickr("#checkout", {
        minDate: dateStr,
        dateFormat: "Y-m-d",
      });
    },
  });

  flatpickr("#checkout", {
    minDate: "today",
    dateFormat: "Y-m-d",
  });
});

// Showing Toast
function showToast() {
  const toast = document.getElementById("submissionToast");
  toast.style.display = "block";
  toast.classList.add("show");

  setTimeout(() => {
    hideToast();
  }, 5000);
}

function hideToast() {
  const toast = document.getElementById("submissionToast");
  toast.style.display = "none";
  toast.classList.remove("show");
}

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Basic Validation
  if (!bookingForm.checkValidity()) {
    bookingForm.classList.add("was-validated");
    return;
  }

  // Show Toast
  showToast();

  // Reset Form
  bookingForm.reset();
  bookingForm.classList.remove("was-validated");
});
