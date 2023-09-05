// Array of product data
const products = [
  {
    name: "7.3 cu.ft. Smart wi-fi Enabled Gas Dryer with TurboSteam&trade;",
    brand: "LG",
    modelNumber: "DLGX7801WE",
    rating: 4.6,
    regularPrice: "$1,049.99",
    salePrice: "$499",
    savings: "$550.99",
    imageURL: "../../../images.webfronts.com/cache/rducwyrwdupl5260.jpg?imgeng=/w_220/h_220/m_letterbox_ffffff_100",
  },
  {
    name: "5.5 cu.ft. Front Load Washer with Steam",
    brand: "Samsung",
    modelNumber: "WF5500XW",
    rating: 4.2,
    regularPrice: "$899.99",
    salePrice: "$699.99",
    savings: "$200.00",
    imageURL: "../../../images.webfronts.com/cache/samsung-washer.jpg",
  },
  {
    name: "24 cu.ft. French Door Refrigerator",
    brand: "Whirlpool",
    modelNumber: "WRF954CIHV",
    rating: 4.8,
    regularPrice: "$1,799.99",
    salePrice: "$1,599.99",
    savings: "$200.00",
    imageURL: "../../../images.webfronts.com/cache/whirlpool-refrigerator.jpg",
  },
  {
    name: "10.1 cu.ft. Top Freezer Refrigerator",
    brand: "GE",
    modelNumber: "TFR1010GE",
    rating: 4.4,
    regularPrice: "$699.99",
    salePrice: "$599.99",
    savings: "$100.00",
    isInStock: "Yes",
    isClearance: "No",
    imageURL: "../../../images.webfronts.com/cache/ge-refrigerator.jpg",
  },
  {
    name: "Front Load Washer with Steam and Wi-Fi Connectivity",
    brand: "Samsung",
    modelNumber: "WF8500XW",
    rating: 4.7,
    regularPrice: "$1,199.99",
    salePrice: "$999.99",
    savings: "$200.00",
    isInStock: "Yes",
    isClearance: "No",
    imageURL: "../../../images.webfronts.com/cache/samsung-washer-2.jpg",
  },
  {
    name: "5-Burner Gas Cooktop",
    brand: "KitchenAid",
    modelNumber: "KGCT365K",
    rating: 4.5,
    regularPrice: "$849.99",
    salePrice: "$749.99",
    savings: "$100.00",
    isInStock: "Yes",
    isClearance: "No",
    imageURL: "../../../images.webfronts.com/cache/kitchenaid-cooktop.jpg",
  },
  {
    name: "High-Efficiency Top Load Washer",
    brand: "Maytag",
    modelNumber: "MVW7232HW",
    rating: 4.3,
    regularPrice: "$899.99",
    salePrice: "$799.99",
    savings: "$100.00",
    isInStock: "Yes",
    isClearance: "No",
    imageURL: "../../../images.webfronts.com/cache/maytag-washer.jpg",
  },
  {
    name: "24 cu.ft. French Door Refrigerator with Ice Maker",
    brand: "Samsung",
    modelNumber: "RF24R7201SR",
    rating: 4.6,
    regularPrice: "$2,199.99",
    salePrice: "$1,899.99",
    savings: "$300.00",
    isInStock: "Yes",
    isClearance: "No",
    imageURL: "../../../images.webfronts.com/cache/samsung-refrigerator.jpg",
  }
];

// Function to create a product block
function createProductBlock(product) {
  const productBlock = document.createElement("div");
  productBlock.classList.add("item", "featured-product");

  productBlock.innerHTML = `
    <a class="block" href="../../products/lg/dlgx7801we.html" title="View ${product.name}">
      <div class="model-img">
        <!-- Flags and Image -->
        <!-- ... -->
      </div>
      <div class="model-detail">
        <p class="model-brand-logo m-t-0">
          <img class="model-brand-logo" height="40" title="LG Logo" alt="LG Logo" src="../../common_images/catalog_logos_standard/LG20e8.GIF?ccid=x350d5ebd">
        </p>
        <p class="model-desc">
          <strong class="related-item-desc dotdotdot">${product.name}</strong>
        </p>
        <p class="model-branding-wrapper small text-muted">
          <strong class="model-brand model-brand-text">${product.brand}</strong> 
          <span class="model-number truncate">${product.modelNumber}</span>
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
function addProductBlocksToCarousel() {
  const carouselContainer = document.querySelector(".carousel-side-nav");

  // Iterate through the product data and create product blocks
  products.slice(0, 5).forEach((product) => {
    const productBlock = createProductBlock(product);
    carouselContainer.appendChild(productBlock);
  });
}

// Call the function to add product blocks to the carousel
addProductBlocksToCarousel();