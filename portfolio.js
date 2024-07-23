$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    $('#contact-form').submit(function(event) {
        event.preventDefault();
        // Implement form submission logic here
        alert('Form submitted successfully!');
    });

    // Smooth scrolling for navigation links
    $('a.nav-link').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800);
        }
    });
});


