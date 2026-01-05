/* ================= CART GLOBAL ================= */

/* ----- PRICE PARSER (IMPORTANT FIX) ----- */
function getNumericPrice(priceText) {
  return Number(priceText.replace(/[^\d]/g, ""));
}

/* ----- STORAGE ----- */
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* ===== Update Navbar Cart Count ===== */
function updateCartCount() {
  const cart = getCart();
  const countEl = document.getElementById("cartCount");
  if (!countEl) return;

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  countEl.innerText = totalQty;
}

/* ===== Add to Cart (PRODUCT PAGES) ===== */
function addToCart(e, btn) {
  e.preventDefault();

  const card = btn.closest(".product-card");

  const product = {
    id: btn.dataset.id,
    name: card.querySelector("h3").innerText,
    size: card.querySelector(".ml").innerText,
    price: getNumericPrice(card.querySelector(".price").innerText),


    // image: card.querySelector("img").src,
image: new URL(card.querySelector("img").getAttribute("src"), window.location.origin).pathname,


    qty: 1
  };

  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push(product);
  }

  saveCart(cart);
  updateCartCount();
  showCartPopup(product.name);
}

/* ===== Buy Now ===== */
function buyNow(e, btn) {
  e.preventDefault();
  addToCart(e, btn);
  window.location.href = "pages/cart.html";
}

/* ===== Redirect Cart Icon ===== */
function redirectCart() {
  window.location.href = "pages/cart.html";
}

/* ===== Popup ===== */
function showCartPopup(name) {
  const popup = document.getElementById("cartPopup");
  const text = document.getElementById("cartPopupText");

  if (!popup || !text) return;

  text.innerText = `${name} added to cart`;
  popup.classList.add("show");

  setTimeout(() => popup.classList.remove("show"), 2000);
}

/* ================= CART PAGE ================= */

function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  if (!container || !totalEl) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p style='color:#aaa'>Your cart is empty.</p>";
    totalEl.innerText = "Total: ₹0";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>${item.size}</p>

          <div class="cart-actions">
            <div class="qty-box">
              <button onclick="changeQty('${item.id}', -1)">−</button>
              <span>${item.qty}</span>
              <button onclick="changeQty('${item.id}', 1)">+</button>
            </div>
            <br>
            <button class="remove-btn" onclick="removeFromCart('${item.id}')">
              Remove
            </button>
          </div>
        </div>

        <div class="cart-price">₹${itemTotal}</div>
      </div>
    `;
  });

  totalEl.innerText = `Total: ₹${total}`;
}

/* ===== Quantity Change ===== */
function changeQty(id, change) {
  const cart = getCart();
  const item = cart.find(p => p.id === id);

  if (!item) return;

  item.qty += change;

  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart(cart);
  renderCart();
  updateCartCount();
}

/* ===== Remove Item ===== */
function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);

  saveCart(cart);
  renderCart();
  updateCartCount();
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCart();
});
