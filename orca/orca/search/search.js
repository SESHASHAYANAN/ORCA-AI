const button = document.getElementById('redirectButton');
const buy = document.getElementById('buy');
const scoreboard = document.getElementById('scoreboard');
const calculate = document.getElementById('calculate');
const education = document.getElementById('education');
const connect = document.getElementById('connect');
const search = document.getElementById('search');
const profile = document.getElementById('profile');
const home = document.getElementById('homeButton');

const plantImage = document.getElementById('imageUpload');
const identifyButton = document.querySelector('button[aria-label="Identify Plant"]');
const resultDiv = document.getElementById('result');

async function identifyPlant() {
    const file = plantImage.files[0];
    if (!file) {
        resultDiv.innerHTML = '<p>Please select an image file.</p>';
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    // Show loading indicator
    resultDiv.innerHTML = '<p>Loading...</p>';
    identifyButton.disabled = true; // Disable the button to prevent multiple clicks

    try {
        const response = await fetch('http://localhost:5500/api/identify-plant', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const plantData = await response.json();
        displayPlantInfo(plantData);
    } catch (error) {
        console.error('Error identifying plant:', error);
        resultDiv.innerHTML = '<p>Error identifying plant. Please try again.</p>';
    } finally {
        identifyButton.disabled = false; // Re-enable the button after processing
    }
}

async function displayPlantInfo(plantData) {
    resultDiv.innerHTML = ''; // Clear previous content

    if (plantData && plantData.name) {
        resultDiv.innerHTML = `
            <h3>${plantData.name}</h3>
            <p>${plantData.description}</p>
        `;

        try {
            const response = await fetch('http://localhost:5500/api/plants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(plantData)
            });

            const savedPlant = await response.json();
            console.log('Saved plant:', savedPlant);
            loadSavedPlants(); // Reload saved plants after saving a new one
        } catch (error) {
            console.error('Error saving plant:', error);
        }
    } else {
        resultDiv.innerHTML = '<p>Plant not identified. Please try again with a different image.</p>';
    }
}

async function loadSavedPlants() {
    try {
        const response = await fetch('http://localhost:5500/api/plants');
        const plants = await response.json();
        displaySavedPlants(plants);
    } catch (error) {
        console.error('Error loading saved plants:', error);
    }
}

function displaySavedPlants(plants) {
    const savedPlantsContainer = document.getElementById('savedPlants');
    savedPlantsContainer.innerHTML = '';

    plants.forEach(plant => {
        const plantElement = document.createElement('div');
        plantElement.innerHTML = `
            <h3>${plant.name}</h3>
            <p>${plant.description}</p>
        `;
        savedPlantsContainer.appendChild(plantElement);
    });
}

// Load saved plants on page load
loadSavedPlants();
