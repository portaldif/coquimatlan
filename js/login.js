// Get the registration and login forms
const registrationForm = document.querySelector('#registration-form');
const loginForm = document.querySelector('#login-form');

// Get the success and error message elements
const registrationMessage = document.querySelector('#registration-message');
const loginMessage = document.querySelector('#login-message');

// Add an event listener to the registration form
registrationForm.addEventListener('submit', (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(registrationForm);

  // Send the form data to the server
  fetch('/register', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Display a success message and show the login form
      registrationForm.style.display = 'none';
      registrationMessage.textContent = 'Registration successful. Please log in.';
      loginForm.style.display = 'block';
    } else {
      // Display an error message
      throw new Error('Registration failed.');
    }
  })
  .catch(error => {
    registrationMessage.textContent = error.message;
  });
});

// Add an event listener to the login form
loginForm.addEventListener('submit', (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(loginForm);

  // Send the form data to the server
  fetch('/login', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Redirect the user to the main page
      window.location.href = 'index.html';
    } else {
      // Display an error message
      throw new Error('Login failed.');
    }
  })
  .catch(error => {
    loginMessage.textContent = error.message;
  });
});