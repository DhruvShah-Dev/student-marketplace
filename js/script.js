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

// Remove unused code for switching between login and signup forms if not needed
// Function to validate email
function validateEmail(email) {
    const eduRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)+edu$/;
    return eduRegex.test(email);
}

// Handle Sign-up form submission
document.getElementById('sign-up-form')?.addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert("Please enter a valid university email ending with .edu");
        event.preventDefault();  // Prevent form submission if email is invalid
    }
});
