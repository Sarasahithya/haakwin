document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    alert(`Message sent from ${name} (${email}): ${message}`);
    e.target.reset();
});