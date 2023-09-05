// Function to fetch and display JSON data
function fetchAndDisplayData() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            
            data.forEach(product => {
                const listItem = document.createElement('li');
                listItem.textContent = `${product.name} - Price: ${product.price}`;
                productList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
}

// Call the function to fetch and display data
fetchAndDisplayData();
