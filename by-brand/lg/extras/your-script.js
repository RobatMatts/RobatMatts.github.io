// Define an array of product descriptions
const productDescriptions = [
    '7.3 cu.ft. Smart Wi-Fi Enabled Gas Dryer with TurboSteam™',
    '23 cu. ft. Smart Wi-Fi Enabled Counter-Depth Refrigerator with Craft Ice™ Maker',
    '22 cu ft. Smart Counter Depth Double Freezer Refrigerator with Craft Ice™',
];

// Function to display product descriptions
function displayProductDescriptions() {
    const productContainer = document.querySelector('.product-list');

    productDescriptions.forEach((description) => {
        const productElement = document.createElement('p');
        productElement.textContent = description;
        productContainer.appendChild(productElement);
    });
}

// Ensure the HTML is loaded before calling the displayProductDescriptions function
document.addEventListener('DOMContentLoaded', function () {
    displayProductDescriptions();
});