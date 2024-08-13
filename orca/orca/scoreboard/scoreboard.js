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
document.querySelector('.logout-button').addEventListener('click', function() {
    window.location.href = '/orca/login.html';
});
const scoreData = [
    { username: 'user1002', savedCO2: '50 pounds ', kwhm2: 28, rank: 1, isFriend: false },
    { username: 'user1004', savedCO2: '37 pounds ', kwhm2: 12, rank: 2, isFriend: true },
    { username: 'user1005', savedCO2: '36 pounds ', kwhm2: 8, rank: 3, isFriend: false },
    { username: 'user1007', savedCO2: '20 pounds ', kwhm2: 4, rank: 4, isFriend: false },
    { username: 'user2708', savedCO2: '10 pounds ', kwhm2: 1, rank: 5, isFriend: true }
];

function populateTable() {
    const tableBody = document.querySelector('#scoreTable tbody');
    tableBody.innerHTML = '';

    scoreData.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.savedCO2}</td>
            <td>${user.kwhm2}</td>
            <td>${user.rank}</td>
            <td>${user.isFriend ? 
                '<span class="if-friend">✓</span>' : 
                '<span class="add-friend">+ Add friend</span>'}
            </td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', populateTable);

document.querySelector('#scoreTable').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-friend')) {
        e.target.textContent = '✓';
        e.target.classList.remove('add-friend');
        e.target.classList.add('if-friend');
    }
});

document.querySelector('#logoutBtn').addEventListener('click', () => {
    alert('Logout functionality would be implemented here.');
});