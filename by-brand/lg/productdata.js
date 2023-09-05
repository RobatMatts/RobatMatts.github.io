// Function to fetch the product data from the JSON file
export function getProductData() {
  return fetch('products.json')
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching product data:', error);
    });
}
