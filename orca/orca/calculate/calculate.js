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

search.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = '/orca/search/search.html'; // Replace with your target HTML file
});

connect.addEventListener('click', function () {
    window.location.href = '/orca/connect/connect.html';
});
profile.addEventListener('click', function() {
    // Redirect to the specified HTML file
    window.location.href = '/orca/profile/profile.html'; // Replace with your target HTML file
});

// Function to calculate savings from travel
function calculateTravelSavings() {
    const travelToOffice = parseFloat(document.getElementById('travelToOffice').value);
    const insteadOfOffice = parseFloat(document.getElementById('insteadOfOffice').value);
    const travelToReturn = parseFloat(document.getElementById('travelToReturn').value);
    const insteadOfReturn = parseFloat(document.getElementById('insteadOfReturn').value);
    const travelToExtra = parseFloat(document.getElementById('travelToExtra').value);
    const insteadOfExtra = parseFloat(document.getElementById('insteadOfExtra').value);

    const officeSaving = insteadOfOffice - travelToOffice;
    const returnSaving = insteadOfReturn - travelToReturn;
    const extraSaving = insteadOfExtra - travelToExtra;

    return Math.max(0, officeSaving) + Math.max(0, returnSaving) + Math.max(0, extraSaving);
}

// Function to calculate savings from food
function calculateFoodSavings() {
    const foodOption = parseFloat(document.getElementById('foodOption').value);
    return foodOption;
}

// Function to calculate savings from purchases
function calculatePurchaseSavings() {
    const purchaseOption = parseFloat(document.getElementById('purchaseOption').value);
    return purchaseOption;
}

// Function to calculate total savings
function calculateTotalSavings() {
    const travelSavings = calculateTravelSavings();
    const foodSavings = calculateFoodSavings();
    const purchaseSavings = calculatePurchaseSavings();

    document.getElementById('foodSaved').textContent = `Total saved by eating: ${foodSavings.toFixed(2)} pound`;
    document.getElementById('purchaseSaved').textContent = `Total saved by buying: ${purchaseSavings.toFixed(2)} tons`;

    const totalSaved = travelSavings + foodSavings + purchaseSavings;
    document.getElementById('totalSaved').textContent = `Total CO₂ saved today: ${totalSaved.toFixed(2)} pound`;

    // Store the total savings in localStorage
    localStorage.setItem('totalCO2SavedToday', totalSaved.toFixed(2));
}

// Assuming this is your existing function to calculate CO₂ savings
function calculateCO2Savings() {
    let totalCO2Saved = calculateTotalSavings();
    
    // Display the total savings on the calculate page
    document.getElementById('totalCO2SavedDisplay').innerText = totalCO2Saved + " tons";
    
    // Store the total savings in localStorage
    localStorage.setItem('totalCO2SavedToday', totalCO2Saved.toFixed(2));
}
document.querySelector('.logout-button').addEventListener('click', function() {
    window.location.href = '/orca/login.html';
});