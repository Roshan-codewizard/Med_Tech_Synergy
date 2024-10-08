const validCredentials = [
    { username: 'sukesh', password: 'sukesh1' },
    { username: 'roshan', password: 'roshan2' },
    { username: 'sujith', password: 'sujith3' },
    { username: 'sam', password: 'sam4' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if the entered credentials match any of the valid credentials
    const isValidUser = validCredentials.some(cred => cred.username === username && cred.password === password);

    if (isValidUser) {
        alert('Login successful!');
        // Redirect to another page or dashboard
        window.location.href = 'add_report.html'; // Replace with your dashboard page
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
