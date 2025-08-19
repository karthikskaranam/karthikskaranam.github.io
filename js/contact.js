document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');

    // Reset status
    status.textContent = '';
    
    // Name validation
    if (!/^[a-zA-Z\s]{2,}$/.test(name)) {
        status.textContent = 'Please enter a valid name (letters only, min 2 chars).';
        return;
    }

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
        status.textContent = 'Please enter a valid email.';
        return;
    }

    // Message length
    if (message.length > 500) {
        status.textContent = 'Message cannot exceed 500 characters.';
        return;
    }

    // Submit form using fetch (AJAX)
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => response.text())
    .then(text => {
        status.textContent = text;
        this.reset();
    })
    .catch(err => status.textContent = 'Error sending message.');
});
