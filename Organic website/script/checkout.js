document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
});
