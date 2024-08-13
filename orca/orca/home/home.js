const button = document.getElementById('redirectButton');
const buy = document.getElementById('buy');
const scoreboard = document.getElementById('scoreboard');
const calculate = document.getElementById('calculate');
const education = document.getElementById('education');
const connect = document.getElementById('connect');
const search = document.getElementById('search');
const profile = document.getElementById('profile');
const home = document.getElementById('homeButton');


// Add an event listener for the 'click' event
home.addEventListener('click', function () {
    window.location.href = '/orca/orca.html';
});
// Add an event listener for the 'click' event
button.addEventListener('click', function () {
    window.location.href = '/orca/home/home.html';
});

buy.addEventListener('click', function () {
    window.location.href = '/orca/buy/buy.html';
});

search.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = '/orca/search/search.html'; // Replace with your target HTML file
});

scoreboard.addEventListener('click', function () {
    window.location.href = '/orca/scoreboard/scoreboard.html';
});

education.addEventListener('click', function () {
    window.location.href = '/orca/education/education.html';
});

calculate.addEventListener('click', function () {
    window.location.href = '/orca/calculate/calculate.html';
});

connect.addEventListener('click', function () {
    window.location.href = '/orca/connect/connect.html';
});
profile.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = '/orca/profile/profile.html'; // Replace with your target HTML file
});

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the saved value from localStorage
    let totalCO2SavedToday = localStorage.getItem('totalCO2SavedToday');
    
    if (totalCO2SavedToday) {
        // Display the value on the home page
        document.getElementById('totalCO2SavedTodayDisplay').textContent = `Total CO₂ saved today: ${totalCO2SavedToday} pound`;
    } else {
        // Default message if no value is stored
        document.getElementById('totalCO2SavedTodayDisplay').textContent = "Total CO₂ saved today: No data available";
    }
});
document.querySelector('.logout-button').addEventListener('click', function() {
    window.location.href = '/orca/login.html';
});