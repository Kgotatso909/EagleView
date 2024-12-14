const bookingForm = document.getElementById("bookingForm");

// Initialize the Date Pickers
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

// Show Toast
function showToast() {
  const toast = new bootstrap.Toast(document.getElementById('submissionToast'));
  toast.show(); // Show the toast

  // Optional: Hide the toast after 5 seconds
  setTimeout(() => {
    toast.hide();
  }, 5000);
}

// Form Submission
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
