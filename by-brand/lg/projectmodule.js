import { getProductData } from './productData.js';

// Function to create a product block
function createProductBlock(product) {
  // ... (Same code as before)
}

// Function to add product blocks to the carousel
export function addProductBlocksToCarousel() {
  const carouselContainer = document.querySelector(".carousel-side-nav");

  // Fetch the product data
  getProductData()
    .then((data) => {
      // Iterate through the product data and create product blocks
      data.slice(0, 5).forEach((product) => {
        const productBlock = createProductBlock(product);
        carouselContainer.appendChild(productBlock);
      });
    })
    .catch((error) => {
      console.error('Error fetching product data:', error);
    });
}
