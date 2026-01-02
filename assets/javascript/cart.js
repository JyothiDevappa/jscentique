// ===== CART STORAGE =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== ELEMENTS =====
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");

// ===== RENDER CART =====
function renderCart() {
  cartItemsEl.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p style='color:#888'>Your cart is empty.</p>";
    cartTotalEl.textContent = "Total: ₹0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItemsEl.innerHTML += `
      <div class="cart-item">
        <img src="../${item.image}" alt="${item.name}">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>${item.size}</p>

          <div class="cart-actions">
            <div class="qty-box">
              <button onclick="changeQty(${index}, -1)">−</button>
              <span>${item.qty}</span>
              <button onclick="changeQty(${index}, 1)">+</button>
            </div>
            <br>
            <button class="remove-btn" onclick="removeItem(${index})">
              Remove
            </button>
          </div>
        </div>

        <div class="cart-price">
          ₹${item.price * item.qty}
        </div>
      </div>
    `;
  });

  cartTotalEl.textContent = `Total: ₹${total}`;
}

// ===== CHANGE QUANTITY =====
function changeQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

// ===== REMOVE ITEM =====
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

// ===== SAVE =====
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ===== INIT =====
renderCart();
