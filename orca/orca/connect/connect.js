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

search.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = '/orca/search/search.html'; // Replace with your target HTML file
});

function followUser(button) {
    if (button.textContent === "Follow") {
        button.textContent = "Followed";
        button.style.backgroundColor = "#28a745"; // Change button color to green when followed
    } else {
        button.textContent = "Follow";
        button.style.backgroundColor = "#007bff"; // Change back to original color if unfollowed
    }
}






// Connect page logic
document.addEventListener('DOMContentLoaded', function() {
    const followButtons = document.querySelectorAll('.follow-btn');

    followButtons.forEach(button => {
        button.addEventListener('click', function() {
            const userId = this.dataset.userid; // Assume each button has a data attribute like data-userid="1002"
            this.textContent = 'Following';
            this.classList.add('following');
            addFollower(userId);
        });
    });
});

// Function to add follower to the list (could be in a separate JS file for better modularity)
function addFollower(userId) {
    const followersList = JSON.parse(localStorage.getItem('followersList')) || [];
    
    if (!followersList.includes(userId)) {
        followersList.push(userId);
        localStorage.setItem('followersList', JSON.stringify(followersList));
    }
}
document.querySelector('.logout-button').addEventListener('click', function() {
    window.location.href = '/orca/login.html';
});