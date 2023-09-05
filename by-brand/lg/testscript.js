<script>
  // Sample product data (you can replace this with your actual data)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      imageSrc: 'path_to_image_1.jpg',
      price: 499.99,
      regularPrice: 1049.99,
      savings: 550.99,
      rating: 4.6,
      brand: 'LG',
      modelNumber: 'DLGX7801WE',
    },
    // Add more product data objects here for additional products
  ];

  // Get the product container element
  const productContainer = document.getElementById('product-container');

  // Loop through the products and generate HTML for each product block
  products.forEach((product) => {
    const productBlock = `
      <div class="item featured-product">
        <!-- Insert your product block HTML structure here -->
        <!-- You can use template literals to insert dynamic data into the HTML -->
        <!-- Example: -->
        <p class="model-desc">
          <strong class="related-item-desc dotdotdot">${product.name}</strong>
        </p>
        <div class="model-brand-logo m-t-0">
          <img class="model-brand-logo" height="40" title="LG Logo" alt="LG Logo" src="../../common_images/catalog_logos_standard/LG20e8.GIF?ccid=x350d5ebd">
        </div>
        <!-- Insert other product details here using ${product.propertyName} syntax -->
        <!-- Example: -->
        <p class="model-branding-wrapper small text-muted">
          <strong class="model-brand model-brand-text">${product.brand}</strong>
          <span class="model-number truncate">${product.modelNumber}</span>
        </p>
        <!-- Add more elements as needed -->
      </div>
    `;

    // Append the product block to the container
    productContainer.innerHTML += productBlock;
  });
</script>