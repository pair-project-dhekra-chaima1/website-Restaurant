

const navigation = document.querySelector('.navigation ul');


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
  document.getElementById("mySidenav").style.width = "1325px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
console.log('hrel')