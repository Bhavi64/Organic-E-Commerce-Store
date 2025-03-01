// Function to handle adding the product to the cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = {
        id: productId,
        name: "Organic Apple", // Replace with dynamic product name
        price: 2.00, // Replace with dynamic product price
        quantity: 1
    };

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

// Example function to handle product detail display
function displayProductDetails(productId) {
    // This would be replaced with a call to a server or database in a real application
    const products = [
        { id: 1, name: "Organic Apple", price: 2.00, description: "Fresh and juicy organic apples.", image: "images/apple.jpg" }
        // Add more products as needed
    ];

    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `${product.price.toFixed(2)}`;
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
