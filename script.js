// Slideshow Functionality
if (document.querySelector('.slide')) {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const indicators = document.querySelectorAll('.indicator');

    function showSlide(index) {
        // Hide all slides
        slides.forEach((slide) => {
            slide.style.opacity = 0;
            slide.style.transform = 'translateX(100%)'; // Slide out effect
        });

        // Show the current slide
        slides[index].style.opacity = 1;
        slides[index].style.transform = 'translateX(0)'; // Slide in effect

        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Add event listeners for buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Add event listeners for indicators
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
        });
    });

    // Show the first slide initially
    showSlide(currentSlide);

    // Auto-advance slides (optional)
    setInterval(nextSlide, 5000); // Change slide every 3 seconds
}

// Dark Mode Toggle - works everywhere
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Function to set dark mode
function setDarkMode(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Load dark mode preference from localStorage
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
    setDarkMode(true);
} else {
    setDarkMode(false);
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    setDarkMode(!isDarkMode);
});

// cyclic typing effect for the logo at the top of each HTML page
const logoElement = document.querySelector('.logo');
const logoText = "🐸farha ferdous🐸"; 
let charIndex = 0;
let isDeleting = false;

function typeLogo() {
    if (!isDeleting) {
        // Typing logic
        logoElement.textContent = logoText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === logoText.length) {
            isDeleting = true;
            setTimeout(typeLogo, 1000); // Pause at the end of the logo text
        } else {
            setTimeout(typeLogo, 100); // Typing speed
        }
    } else {
        // Deleting logic
        logoElement.textContent = logoText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            setTimeout(typeLogo, 500); // Pause before typing the logo again
        } else {
            setTimeout(typeLogo, 50); // Deleting speed
        }
    }
}

// Start the typing effect
typeLogo();