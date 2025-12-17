/* -------------------------------------------------------
   NAVBAR + MOBILE MENU (CLEAN VERSION)
-------------------------------------------------------- */

const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('navMenuMobile');
const mobileLinks = mobileMenu.querySelectorAll('.nav-link');

/* ===== NAVBAR SCROLL EFFECT ===== */
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===== HAMBURGER TOGGLE ===== */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  navbar.classList.toggle('menu-open');
});

/* ===== CLOSE MENU ON LINK CLICK ===== */
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    navbar.classList.remove('menu-open');
  });
});




/* -------------------------------------------------------
    arrow SCROLL 
-------------------------------------------------------- */

 const arrowBtn = document.getElementById("scrollArrow");

  const sections = document.querySelectorAll("section");
  const firstSection = sections[0];
  const thirdSection = sections[2]; // 👈 THIS IS THE KEY
  const lastSection  = sections[sections.length - 1];

  window.addEventListener("scroll", () => {
    const isLastSectionVisible =
      lastSection.getBoundingClientRect().top <= window.innerHeight / 2;

    if (isLastSectionVisible) {
      arrowBtn.classList.add("up"); // arrow faces UP
    } else {
      arrowBtn.classList.remove("up"); // arrow faces DOWN
    }
  });

  arrowBtn.addEventListener("click", () => {
    if (arrowBtn.classList.contains("up")) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    } else {
      thirdSection.scrollIntoView({ behavior: "smooth" }); // 👈 GOES TO 3RD
    }
  });