// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Menu Toggle
const nav = document.querySelector('nav');
const toggleMenu = document.querySelector('.menu-toggle');

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Hide swipe down text and arrow on scroll
window.addEventListener('scroll', function() {
    const swipeDownText = document.getElementById('swipe-down');

    if (window.scrollY > 0) { // Hide immediately when scrolling starts
        swipeDownText.classList.add('swipe-down-hidden'); // Add hidden class
        swipeDownText.style.zIndex = 0; // Set z-index to 0 when scrolling
    } else {
        swipeDownText.classList.remove('swipe-down-hidden'); // Remove hidden class
        swipeDownText.style.zIndex = 100; // Reset z-index when at the top
    }
});
// JavaScript example to hide the arrow when scrolling
window.addEventListener('scroll', function() {
    const downArrow = document.querySelector('.down-arrow');
    if (window.scrollY > 0) {
        downArrow.classList.add('down-arrow-hidden');
    } else {
        downArrow.classList.remove('down-arrow-hidden');
    }
});

