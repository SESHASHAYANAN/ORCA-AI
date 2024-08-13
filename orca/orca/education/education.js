const button = document.getElementById('redirectButton');
const buy = document.getElementById('buy');
const scoreboard = document.getElementById('scoreboard');
const calculate = document.getElementById('calculate');
const education = document.getElementById('education');
const connect = document.getElementById('connect');
const search = document.getElementById('search');
const profile = document.getElementById('profile');
const home = document.getElementById('homeButton');

document.querySelector('.logout-button').addEventListener('click', function() {
    window.location.href = '/orca/login.html';
});
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

scoreboard.addEventListener('click', function () {
    window.location.href = '/orca/scoreboard/scoreboard.html';
});

education.addEventListener('click', function () {
    window.location.href = '/orca/education/education.html';
});

search.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = '/orca/search/search.html'; // Replace with your target HTML file
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

function redirectToPage(page) {
    window.location.href = page;
}