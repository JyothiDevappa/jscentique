/* ================= WISHLIST GLOBAL ================= */

function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(wishlist) {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

/* ===== Update Navbar Count ===== */
function updateWishlistCount() {
  const wishlist = getWishlist();
  const countEl = document.getElementById("wishlistCount");
  if (countEl) countEl.innerText = wishlist.length;
}

/* ===== Toggle Product Wishlist ===== */
function toggleProductWishlist(btn) {
  const wishlist = getWishlist();

  const product = {
    id: btn.dataset.id,
    name: btn.dataset.name,
    price: btn.dataset.price,
    size: btn.dataset.size,
    image: btn.dataset.image
  };

  const index = wishlist.findIndex(item => item.id === product.id);

  if (index > -1) {
    wishlist.splice(index, 1);
    btn.classList.remove("active");
    btn.querySelector("i").classList.remove("fa-solid");
    btn.querySelector("i").classList.add("fa-regular");
  } else {
    wishlist.push(product);
    btn.classList.add("active");
    btn.querySelector("i").classList.remove("fa-regular");
    btn.querySelector("i").classList.add("fa-solid");
  }

  saveWishlist(wishlist);
  updateWishlistCount();
}

/* ===== Sync Hearts on Page Load ===== */
function syncWishlistIcons() {
  const wishlist = getWishlist();

  document.querySelectorAll(".product-wishlist").forEach(btn => {
    const id = btn.dataset.id;
    const exists = wishlist.some(item => item.id === id);

    if (exists) {
      btn.classList.add("active");
      btn.querySelector("i").classList.remove("fa-regular");
      btn.querySelector("i").classList.add("fa-solid");
    }
  });
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  updateWishlistCount();
  syncWishlistIcons();
});
