// Function to validate email
function validateEmail(email) {
    const eduRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)+edu$/;
    return eduRegex.test(email);
}

// Password Validation Function
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Handle Sign-up form submission
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());

    let formValid = true;

    // Validate email
    if (!validateEmail(email)) {
        showError('email', "Please enter a valid university email ending with .edu");
        formValid = false;
    }

    // Validate password
    if (!validatePassword(password)) {
        showError('password', "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        formValid = false;
    }

    if (!formValid) {
        event.preventDefault();  // Prevent form submission if validation fails
    }
});

// Function to show error message
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;

    // Ensure that error message is associated with the correct form field for accessibility
    field.setAttribute('aria-describedby', fieldId + '-error');
    errorMessage.id = fieldId + '-error';
    field.insertAdjacentElement('afterend', errorMessage);
}

// Select the sidebar and toggle button
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.sidebar-toggle');

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('closed'); // Toggle 'closed' class on the sidebar
    toggleButton.innerHTML = sidebar.classList.contains('closed') ? '&gt;' : '&lt;'; // Toggle button text
});

// Get modal, overlay, and close elements
const modal = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const loginSignupBtn = document.getElementById('login-signup-btn');

// Show modal when "Login" button is clicked
loginSignupBtn.addEventListener('click', () => {
    modal.style.display = 'block'; // Show the modal
    document.body.style.overflow = 'hidden'; // Disable scrolling on background
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
    document.body.style.overflow = 'auto'; // Enable scrolling on background
});
