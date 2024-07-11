// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation ul');

menuToggle.addEventListener('click', function() {
    navigation.classList.toggle('active');
});
// Form validation example
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.querySelector('#email');
    const emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    // Submit form or perform other actions
    this.submit();
});

function isValidEmail(email) {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}



showSlides(); // Start slideshow
// Modal window example
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
