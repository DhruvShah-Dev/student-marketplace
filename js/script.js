// Select the sidebar and toggle button
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.sidebar-toggle');

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('closed'); // Toggle 'closed' class on the sidebar

    // Update the toggle button text
    if (sidebar.classList.contains('closed')) {
        toggleButton.innerHTML = '&gt;'; // Change to ">"
    } else {
        toggleButton.innerHTML = '&lt;'; // Change to "<"
    }
});

// Get modal, overlay, and close elements
const modal = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const loginSignupBtn = document.getElementById('login-signup-btn');
const signUpToggle = document.getElementById('sign-up-toggle');
const loginToggle = document.getElementById('login-toggle');

// Show modal when "Login/Signup" button is clicked
loginSignupBtn.addEventListener('click', () => {
    modal.style.display = 'block'; // Show the modal
    document.body.style.overflow = 'hidden'; // Disable scrolling on background
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
    document.body.style.overflow = 'auto'; // Enable scrolling on background
});

// Switch to Sign-up form
signUpToggle.addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'block';
});

// Switch to Login form
loginToggle.addEventListener('click', () => {
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});


