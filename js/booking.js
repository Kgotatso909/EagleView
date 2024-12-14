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
// Date vaidation
function validateDates() {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  // Check if both checkin and checkout dates are selected
  if (!checkin || !checkout) {
    return false;
  }

  // Convert to Date objects for comparison
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);

  // Check if check-out is before check-in
  if (checkoutDate <= checkinDate) {
    return false;
  }

  return true;
}

// Form Submission
bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Basic Validation
  if (!bookingForm.checkValidity() || !validateDates()) {
    bookingForm.classList.add("was-validated");

    // Display custom error for date fields
    if (!validateDates()) {
      const checkoutInput = document.getElementById("checkout");
      const checkoutError = document.getElementById("checkoutError");

      // Add the invalid class to checkout field
      checkoutInput.classList.add("is-invalid");

      // Display error message
      checkoutError.style.display = "block";
    }

    return;
  }

  // Show Toast
  showToast();

  // Reset Form
  bookingForm.reset();
  bookingForm.classList.remove("was-validated");

  // Hide error message after successful submission
  const checkoutInput = document.getElementById("checkout");
  const checkoutError = document.getElementById("checkoutError");

  checkoutInput.classList.remove("is-invalid");
  checkoutError.style.display = "none";
});