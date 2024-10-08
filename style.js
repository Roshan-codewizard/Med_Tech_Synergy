document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation (replace with real authentication logic)
    if (username === 'sukesh' && password === 'sukesh123') {
        alert('Login successful!');
        // Redirect to another page or dashboard
        window.location.href = 'dashboard.html'; // Replace with your dashboard page
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
