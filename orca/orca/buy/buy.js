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
document.querySelector('.logout-button').addEventListener('click', function() {
    window.location.href = '/orca/login.html';
});






// Array of product IDs
const products = [
    "product1",
    "product2",
    "product3",
    "product4",
    "product5",
    "product6",
    "product7",
    "product8",
    "product9"
];

// Function to add click event listeners to each product
function addProductClickListeners() {
    products.forEach(productId => {
        const productElement = document.getElementById(productId);

        if (productElement) {
            productElement.addEventListener('click', () => {
                // Redirect to the corresponding product page
                window.location.href = `${productId}.html`;
            });
        }
    });
}

// Call the function to set up the event listeners
addProductClickListeners();
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product ordered!');
    });
});

// Function to display a message in the message div
function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
}

// Event listener for "Buy Now" button
document.querySelector('.buy-now-btn').addEventListener('click', function() {
    showMessage('Product purchased!');
});

// Event listener for "Add to Cart" button
document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
    showMessage('Added to cart!');
});
