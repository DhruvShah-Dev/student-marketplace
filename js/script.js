// js/scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuToggle.classList.toggle("open"); // Dynamically change icon
    });
});


