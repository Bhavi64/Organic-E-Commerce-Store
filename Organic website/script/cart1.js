function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let cartHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const price = parseInt(item.price.replace('₹', '')); // Remove the ₹ symbol and convert to integer
        totalPrice += price * item.quantity;

        cartHTML += `
            <div class="cart-item">
                <p><strong>${item.name}</strong></p>
                <p>Quantity: ${item.quantity}</p>
                <p>${item.price}</p>
            </div>
        `;
    });

    cartHTML += `<p><strong>Total Price: ₹${totalPrice}</strong></p>`;

    cartContainer.innerHTML = cartHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});
