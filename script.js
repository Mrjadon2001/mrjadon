document.getElementById('modernContactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Placeholder for backend integration
    console.log('Form Submitted:', { fullName, email, mobile, subject, message });
    alert('Thank you! Your message has been sent.');
});
