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


button.addEventListener('click', function () {
    window.location.href = '/orca/home/home.html';
});

buy.addEventListener('click', function () {
    window.location.href = '/orca/buy/buy.html';
});

scoreboard.addEventListener('click', function () {
    window.location.href = '/orca/scoreboard/scoreboard.html';
});

search.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = '/orca/search/search.html'; // Replace with your target HTML file
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





// Profile page logic
document.addEventListener('DOMContentLoaded', function() {
    const followersTable = document.querySelector('#followers-table'); // Assuming this is the ID for the followers table
    const followersList = JSON.parse(localStorage.getItem('followersList')) || [];

    followersList.forEach(userId => {
        const newRow = followersTable.insertRow();
        const cell = newRow.insertCell(0);
        cell.textContent = userId; // Replace with more detailed user information if available
        // Add more cells for other details like CO2 saved, rank, etc., if needed
    });
});
