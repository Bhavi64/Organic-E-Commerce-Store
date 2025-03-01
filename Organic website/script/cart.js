// cart.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
});
