// Initialize AOS (Animate On Scroll)
AOS.init();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formResponse = document.getElementById('form-response');

    // Mocking form submission response
    setTimeout(() => {
        formResponse.textContent = 'Thank you for your message! We will get back to you soon.';
        formResponse.style.color = 'green';
        this.reset();
    }, 1000);
});
