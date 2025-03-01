// main.js
let cart = [];
// Function to add a product to the cart
function addToCart(productId) {
    const product = document.querySelector(`.product[data-id="${productId}"]`);

    if (product) {
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;
        const productImage = product.querySelector('img').src;
    
    
    // Retrieve the existing cart from localStorage, or create a new one if none exists
    //let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the product by its ID
    //const productElement = document.querySelector(`.product:nth-child(${productId})`);
    //const productName = productElement.querySelector('h3').innerText;
    //const productPrice = productElement.querySelector('p').innerText;
    //const productImage = productElement.querySelector('img').src;

    // Create a product object
    const productDetails = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        // If it exists, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If it doesn't exist, add the new product to the cart
        productDetails.quantity = 1;
        cart.push(productDetails);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display a confirmation message or update the cart count
    alert(`${productName} has been added to your cart.`);
} else {
    alert('Product not found.');
}
}
/*
// Function to load the cart from localStorage and display it (you can call this in your cart.html page)
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear previous cart items

    if (cart.length > 0) {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            `;
            cartContainer.appendChild(cartItem);
        });
    } else {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
}

// Function to clear the cart (you can attach this to a "Clear Cart" button)
function clearCart() {
    localStorage.removeItem('cart');
    alert('Your cart has been cleared.');
    loadCart();
}
}*/