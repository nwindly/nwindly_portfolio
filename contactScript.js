document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_port', 'template_2xea0uw', this)
        .then(function() {
            alert('Your message has been sent successfully!');
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
        });
});