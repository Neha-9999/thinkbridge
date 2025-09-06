function showModal(event) {
  event.preventDefault();
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}


// Hamburger
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navbarMenu = document.getElementById('navbarMenu');

hamburgerBtn.addEventListener('click', function () {
  const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true' || false;
  hamburgerBtn.setAttribute('aria-expanded', !expanded);
  navbarMenu.classList.toggle('open');
});

// Accessible mobile nav: close nav on link click (mobile only)
navbarMenu.addEventListener('click', function(e) {
  if(e.target.tagName === "A" && window.innerWidth <= 720) {
    navbarMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', false);
  }
});

// Form validation for accessibility
const signupForm = document.querySelector('.signup form');
signupForm.addEventListener('submit', function(e) {
  const email = document.getElementById('email');
  if (!email.value) {
    email.focus();
    email.setAttribute('aria-invalid', 'true');
    alert('Email is required.');
    e.preventDefault();
  } else {
    email.removeAttribute('aria-invalid');
  }
});
