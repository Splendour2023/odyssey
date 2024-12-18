// JavaScript for Crypto Chibuike's Portfolio

// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Example: Log a message when the page loads
console.log('Welcome to Crypto Chibuike\'s Portfolio!');




