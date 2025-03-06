// Slideshow Functionality (only works on index.html)
if (document.querySelector('.slide')) {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? 1 : 0;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Dark Mode Toggle - works everywhere
const darkModeToggle = document.querySelector('.dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
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