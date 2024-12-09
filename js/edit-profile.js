// Profile Picture Preview
const profilePicInput = document.getElementById('profile-pic-input');
const profilePicPreview = document.getElementById('profile-pic-preview');

profilePicInput.addEventListener('change', () => {
    const file = profilePicInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profilePicPreview.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});

// Form Handling
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Your changes have been saved!');
    // Additional logic to save data can be added here
});

cancelBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to cancel? Unsaved changes will be lost.')) {
        window.location.href = 'account.html';
    }
});
