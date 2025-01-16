document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (password === "your-hardcoded-password") {
        // Proceed to add Jummah times
        window.location.href = 'add-jummah-times.html'; // Redirect to page where they can add times
    } else {
        alert('Incorrect password');
    }
});
