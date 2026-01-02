/* -------------------------------------------------------
   NAVBAR + MOBILE MENU (FINAL FIXED VERSION)
-------------------------------------------------------- */

const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('navMenuMobile');

/* ===== NAVBAR SCROLL EFFECT ===== */
window.addEventListener('scroll', () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    // keep black bg if menu is open
    if (!mobileMenu || !mobileMenu.classList.contains('active')) {
      navbar.classList.remove('scrolled');
    }
  }
});

/* ===== HAMBURGER TOGGLE ===== */
if (hamburger && mobileMenu) {
  const mobileLinks = mobileMenu.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
      navbar.classList.add('menu-open');
    } else {
      navbar.classList.remove('menu-open');
    }
  });

  /* ===== CLOSE MENU ON LINK CLICK ===== */
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      navbar.classList.remove('menu-open');
    });
  });
}

/* -------------------------------------------------------
   SCROLL ARROW
-------------------------------------------------------- */

const arrowBtn = document.getElementById("scrollArrow");

if (arrowBtn) {
  const sections = document.querySelectorAll("section");
  const firstSection = sections[0];
  const thirdSection = sections[2];
  const lastSection = sections[sections.length - 1];

  window.addEventListener("scroll", () => {
    if (!lastSection) return;

    const isLastSectionVisible =
      lastSection.getBoundingClientRect().top <= window.innerHeight / 2;

    if (isLastSectionVisible) {
      arrowBtn.classList.add("up");
    } else {
      arrowBtn.classList.remove("up");
    }
  });

  arrowBtn.addEventListener("click", () => {
    if (arrowBtn.classList.contains("up")) {
      firstSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      thirdSection?.scrollIntoView({ behavior: "smooth" });
    }
  });
}
