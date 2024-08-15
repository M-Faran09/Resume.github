document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Here you can add your own logic to send the form data to a server or an email.
    
    // Clear the form fields
    document.getElementById('contactForm').reset();
});
