document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const plan = document.getElementById('plan').value;
    alert(`You have subscribed to the ${plan} plan.`);
});
