document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this
                .getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Form submission handling (simple example)
        const form = document.querySelector('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
        
            // Basic validation
            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
                return;
            }
        
            // Here, you would normally send the form data to a server
            alert('Thank you for your message!');
            form.reset();
        });
        