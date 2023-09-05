// Function to create a product block
function createProductBlock(product) {
  const productBlock = document.createElement("div");
  productBlock.classList.add("item", "featured-product");

  productBlock.innerHTML = `
    <a class="block" href="../../products/${Product.Brand}" title="View ${product.Desc}">
      <div class="model-img">
        <!-- Flags and Image -->
        <!-- ... -->
      </div>
      <div class="model-detail">
        <p class="model-brand-logo m-t-0">
          <img class="model-brand-logo" height="40" title="LG Logo" alt="LG Logo" src="../../common_images/catalog_logos_standard/LG20e8.GIF?ccid=x350d5ebd">
        </p>
        <p class="model-desc">
          <strong class="related-item-desc dotdotdot">${product.Desc}</strong>
        </p>
        <p class="model-branding-wrapper small text-muted">
          <strong class="model-brand model-brand-text">${product.Brand}</strong> 
          <span class="model-number truncate">${product.PN}</span>
        </p>
        <div class="model-detail__lower">	
          <!-- Rating and Price Information -->
          <!-- ... -->
          <p class="btn btn-outline btn-primary btn-cta btn-cta-details align-self-stretch">See Details</p>
        </div>
      </div>
    </a>
  `;

  return productBlock;
}

// Function to add product blocks to the carousel
function addProductBlocksToCarousel(data) {
  const carouselContainer = document.querySelector(".carousel-side-nav");

  // Iterate through the product data and create product blocks
  data.slice(0, 5).forEach((product) => {
    const productBlock = createProductBlock(product);
    carouselContainer.appendChild(productBlock);
  });
}

// Fetch the product data from the JSON file
fetch('productsbig.json')  
  .then(response => response.json())
  .then(data => {
    // Call a function to create product blocks using the data
    addProductBlocksToCarousel(data);
  })
  .catch(error => {
    console.error('Error fetching product data:', error);
  });