// Select the button element
const button = document.getElementById('redirectButton');
const buy = document.getElementById('buy');
const scoreboard = document.getElementById('scoreboard');
const calculate = document.getElementById('calculate');
const education = document.getElementById('education');
const connect = document.getElementById('connect');
const search = document.getElementById('search');
const profile = document.getElementById('profile');



// Add an event listener for the 'click' event

button.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = 'home/home.html'; // Replace with your target HTML file
});
buy.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = 'buy/buy.html'; // Replace with your target HTML file
});
scoreboard.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = 'scoreboard/scoreboard.html'; // Replace with your target HTML file
});
education.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = 'education/education.html'; // Replace with your target HTML file
});
calculate.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = 'calculate/calculate.html'; // Replace with your target HTML file
});
connect.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = 'connect/connect.html'; // Replace with your target HTML file
});
search.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = 'search/search.html'; // Replace with your target HTML file
});
calculate.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = 'calculate/calculate.html'; // Replace with your target HTML file
});
profile.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = 'profile/profile.html'; // Replace with your target HTML file
});
document.querySelector('.logout-button').addEventListener('click', function() {
    window.location.href = 'login.html';
});






