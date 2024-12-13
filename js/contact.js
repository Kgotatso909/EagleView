document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("submissionToast");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Form field values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const subject = document.getElementById("emailSubject").value.trim();
    const message = document.getElementById("userMessage").value.trim();

    // Validate form fields
    if (!username || !email || !subject || !message) {
      alert("All fields are required!"); // Alert user if any field is empty
      return;
    }

    if (!validateEmail(email)) {
      console.log("invalid image");
      return;
    }

    // Show the toast notification on success
    showToast();

    console.log(username, email, subject, message);

    // Reset the form
    form.reset();
  });

  // Email validation function
  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Show toast
  function showToast() {
    toast.classList.add("show"); // Show the toast
    setTimeout(() => hideToast(), 5000); // Hide after 5 seconds
  }

  // Hide toast
  function hideToast() {
    toast.classList.remove("show"); // Hide the toast
  }
});
