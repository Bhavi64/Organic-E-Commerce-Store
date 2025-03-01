document.getElementById('testimonial-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const testimonial = document.getElementById('testimonial').value;
    // Save testimonial to localStorage or send to a server
    alert('Thank you for your testimonial!');
    document.getElementById('testimonial').value = '';
});
