document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'user1002' && password === '123') {
        window.location.href = 'orca.html';
    } else {
        errorMessage.textContent = 'Try again';
        errorMessage.style.display = 'block';
    }
});
