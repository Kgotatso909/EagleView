document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("submissionToast");

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Reset previous errors
    resetErrors();

    // Get form field values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const subject = document.getElementById("emailSubject").value.trim();
    const message = document.getElementById("userMessage").value.trim();

    let isValid = true;

    // Validate form fields
    if (!username) {
      setError("username", "usernameError", "Please enter your name.");
      isValid = false;
    }
    if (!email || !validateEmail(email)) {
      setError("userEmail", "userEmailError", "Please enter a valid email address.");
      isValid = false;
    }
    if (!subject) {
      setError("emailSubject", "emailSubjectError", "Please enter a subject.");
      isValid = false;
    }
    if (!message) {
      setError("userMessage", "userMessageError", "Please enter your message.");
      isValid = false;
    }

    // If form is valid, show success toast and reset form
    if (isValid) {
      showToast();
      console.log(username, email, subject, message);
      form.reset();
    }
  });

  // Show toast
  function showToast() {
    toast.classList.add("show"); // Show the toast
    setTimeout(() => hideToast(), 5000); // Hide after 5 seconds
  }

  // Hide toast
  function hideToast() {
    toast.classList.remove("show"); // Hide the toast
  }

  // Reset error messages and classes
  function resetErrors() {
    const fields = ["username", "userEmail", "emailSubject", "userMessage"];
    fields.forEach((field) => {
      const input = document.getElementById(field);
      const error = document.getElementById(`${field}Error`);
      input.classList.remove("is-invalid");
      error.style.display = "none";
    });
  }

  // Set error for a field
  function setError(inputId, errorId, errorMessage) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    input.classList.add("is-invalid");
    error.textContent = errorMessage;
    error.style.display = "block"; // Show the error message
  }

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Listen for input events to remove error messages once corrected
  const fields = ["username", "userEmail", "emailSubject", "userMessage"];
  fields.forEach((field) => {
    const input = document.getElementById(field);

    input.addEventListener("input", () => {
      // Remove error message and reset the field if the user starts typing correctly
      if (input.value.trim() !== "") {
        if (field === "userEmail" && !validateEmail(input.value.trim())) {
          setError("userEmail", "userEmailError", "Please enter a valid email address.");
        } else {
          removeError(input, `${field}Error`);
        }
      } else {
        removeError(input, `${field}Error`);
      }
    });
  });

  // Remove error messages and reset the input field's validation
  function removeError(input, errorId) {
    input.classList.remove("is-invalid");
    const error = document.getElementById(errorId);
    error.style.display = "none"; // Hide the error message
  }
});
