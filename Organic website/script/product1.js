// Function to handle adding the product to the cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

// Example function to handle product detail display
function displayProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `₹${product.price.toFixed(2)}`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-image').src = product.image;
    } else {
        document.getElementById('product-details').innerHTML = "<p>Product not found.</p>";
    }
}

// Example usage: call displayProductDetails on page load with a product ID
document.addEventListener('DOMContentLoaded', () => {
    const productId = 1; // Replace with dynamic product ID from the URL or other source
    displayProductDetails(productId);
});

// Example products array
const products = [
    { 
        id: 1, 
        name: "Organic Apple", 
        price: 150.00, // Price in INR
        description: "Fresh and juicy organic apples.", 
        image: "images/apple.jpg" 
    },
    { 
        id: 2, 
        name: "Organic Basmati Rice", 
        price: 300.00, 
        description: "Premium quality organic basmati rice, perfect for your healthy meals.", 
        image: "images/basmati.jpg" 
    },
    { 
        id: 3, 
        name: "Organic Almonds", 
        price: 850.00, 
        description: "Crunchy and nutritious organic almonds, sourced from the best farms.", 
        image: "images/almonds.jpg" 
    },
    { 
        id: 4, 
        name: "Organic Honey", 
        price: 450.00, 
        description: "Pure and natural organic honey, a perfect sweetener for your dishes.", 
        image: "images/honey.jpg" 
    },
    { 
        id: 5, 
        name: "Organic Spinach", 
        price: 50.00, 
        description: "Fresh organic spinach, rich in vitamins and minerals.", 
        image: "images/spinach.jpg" 
    }
    // Add more products as needed
];
