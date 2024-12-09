// Updated account.js: Remove the Edit Profile Button Event Listener
const logoutBtn = document.getElementById('logout-btn');

// Logout Button Event Listener
logoutBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to log out?')) {
        window.location.href = 'index.html'; // Redirect to home page
    }
});
