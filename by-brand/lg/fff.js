const products = [
    {
        brand: 'LG',
        model: 'DLGX7801WE',
        description: '7.3 cu.ft. Smart Wi-Fi Enabled Gas Dryer',
        price: '$499',
    },
    {
        brand: 'Samsung',
        model: 'WF45R6300AV',
        description: '4.5 cu.ft. Front Load Washer',
        price: '$799',
    },
    // Add more product data as needed
];

// Function to populate product information within existing product blocks
function populateProductInformation() {
    const productElements = document.querySelectorAll('.item.featured-product');

    products.forEach((product, index) => {
        const productElement = productElements[index]; // Get the corresponding product element

        // Create and append elements for product information (e.g., brand, model, description, price)
        const brandElement = document.createElement('p');
        brandElement.textContent = `Brand: ${product.brand}`;

        const modelElement = document.createElement('p');
        modelElement.textContent = `Model: ${product.model}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${product.description}`;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: ${product.price}`;

        // Append the elements to the existing product element
        productElement.appendChild(brandElement);
        productElement.appendChild(modelElement);
        productElement.appendChild(descriptionElement);
        productElement.appendChild(priceElement);
    });
}

// Call the populateProductInformation function to populate existing product blocks
populateProductInformation();