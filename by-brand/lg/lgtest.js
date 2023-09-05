// Define an array of product objects
const products = [
  {
    brand: 'LG',
    model: 'DLGX7801WE',
    category: 'Laundry',
    subCategory: ['Dryer', 'Gas Dryer'],
    description: '7.3 cu.ft. Smart Wi-Fi Enabled Gas Dryer with TurboSteam™',
    imageSrc: '../../../images.webfronts.com/cache/rducwyrwdupl5260.jpg?imgeng=/w_220/h_220/m_letterbox_ffffff_100',
    regularPrice: '$1,049.99',
    salePrice: '$499',
    savings: '$550.99',
    rating: '4.6',
    inStock: true,
  },
  {
    brand: 'LG',
    model: 'LRMDC2306D',
    category: 'Refrigerator',
    subCategory: ['Counter-Depth Refrigerator'],
    description: '23 cu. ft. Smart Wi-Fi Enabled Counter-Depth Refrigerator with Craft Ice™ Maker',
    imageSrc: '../../../images.webfronts.com/cache/frdkbopkseqy5260.jpg?imgeng=/w_220/h_220/m_letterbox_ffffff_100',
    regularPrice: '$4,499.99',
    salePrice: '$1,259',
    savings: '$3,240.99',
    rating: '3.6',
    inStock: true,
  },
  {
    brand: 'LG',
    model: 'LRMXC2206D',
    category: 'Refrigerator',
    subCategory: ['Counter Depth', 'Double Freezer Refrigerator'],
    description: '22 cu ft. Smart Counter Depth Double Freezer Refrigerator with Craft Ice™',
    imageSrc: '../../../images.webfronts.com/cache/frmsdmtcxysm5260.jpg?imgeng=/w_220/h_220/m_letterbox_ffffff_100',
    regularPrice: '$2,399.99',
    salePrice: '$1,499',
    savings: '$900.99',
    rating: '4.4',
    inStock: true,
  },
];

// Function to generate and display product HTML
function displayProducts() {
  const productContainer = document.querySelector('.carousel-container');

  products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('item', 'featured-product');

    const productLink = document.createElement('a');
    productLink.classList.add('block');
    productLink.href = `../../products/lg/${product.model.toLowerCase()}.html`;
    productLink.title = `View ${product.description}`;

    const modelImg = document.createElement('div');
    modelImg.classList.add('model-img');

    // Create the rest of the product HTML structure here...

    productLink.appendChild(modelImg);
    productElement.appendChild(productLink);
    productContainer.appendChild(productElement);
  });
}

// Ensure the HTML is loaded before calling the displayProducts function
document.addEventListener('DOMContentLoaded', function () {
  displayProducts();
});
