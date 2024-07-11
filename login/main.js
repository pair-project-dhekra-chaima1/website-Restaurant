document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert('Sign in succeeded!');
});
document.querySelector('.social-button.facebook').addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com/AdachiRestaurant/';
});

document.querySelector('.social-button.instagram').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/adachirestaurant/';
});