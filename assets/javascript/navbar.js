const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('menuOverlay');

/* SCROLL EFFECT */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* OPEN / CLOSE MENU */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

/* CLOSE FUNCTION */
function closeMenu() {
  hamburger.classList.remove('active');
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
}

/* CLOSE ON LINK CLICK */
sideMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* CLOSE ON OVERLAY CLICK */
overlay.addEventListener('click', closeMenu);
