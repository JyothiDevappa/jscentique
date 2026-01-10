/* ===============================
   CHECKOUT PAGE SCRIPT
   J SCENTIQUE
================================ */

const checkoutItems = document.getElementById("checkoutItems");
const checkoutTotal = document.getElementById("checkoutTotal");

let items = [];
let total = 0;

/* ------------------------------
   LOAD ITEMS (BUY NOW or CART)
--------------------------------*/
const singleItem = JSON.parse(localStorage.getItem("checkoutItem"));

if (singleItem) {
  items = [singleItem];
  localStorage.removeItem("checkoutItem");
} else {
  items = JSON.parse(localStorage.getItem("cart")) || [];
}

/* ------------------------------
   RENDER ORDER SUMMARY
--------------------------------*/
function renderCheckout() {
  checkoutItems.innerHTML = "";
  total = 0;

  if (items.length === 0) {
    checkoutItems.innerHTML =
      "<p style='color:#aaa'>Your cart is empty.</p>";
    checkoutTotal.innerText = "";
    return;
  }

  items.forEach((item, index) => {
    total += item.price * item.qty;

    checkoutItems.innerHTML += `
      <div class="order-item">
        <img src="../${item.image}" alt="${item.name}">

        <div style="flex:1">
          <h4>${item.name}</h4>
          <p>${item.size || ""}</p>
          <p>Qty: ${item.qty}</p>
          <p>₹${item.price}</p>

          <button class="remove-item" onclick="removeCheckoutItem(${index})">
            Remove
          </button>
        </div>
      </div>
    `;
  });

  checkoutTotal.innerText = `Total: ₹${total}`;
}

/* ------------------------------
   REMOVE ITEM
--------------------------------*/
function removeCheckoutItem(index) {
  items.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(items));
  renderCheckout();
}

/* ------------------------------
   PLACE ORDER
--------------------------------*/
function placeOrder() {

  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const phone = document.getElementById("phone")?.value.trim();
  const country = document.getElementById("country")?.value;
  const state = document.getElementById("state")?.value;
  const city = document.getElementById("city")?.value.trim();
  const pincode = document.getElementById("pincode")?.value.trim();
  const building = document.getElementById("building")?.value.trim();
  const address = document.getElementById("address")?.value.trim();

  const payment = document.querySelector(
    'input[name="payment"]:checked'
  )?.value || "COD";

  /* BASIC VALIDATION */
  if (
    !name || !phone || !country || !state ||
    !city || !pincode || !building
  ) {
    alert("Please complete all required shipping details.");
    return;
  }

  /* ONLINE PAYMENT PLACEHOLDER */
  if (payment === "ONLINE") {
    alert("Online payment will be added next.");
    return;
  }

  /* SAVE ORDER (FRONTEND ONLY) */
  const orderData = {
    id: "JSC-" + Math.floor(10000 + Math.random() * 90000),
    customer: {
      name,
      email,
      phone,
      country,
      state,
      city,
      pincode,
      building,
      address
    },
    items,
    total,
    payment,
    date: new Date().toISOString()
  };

  localStorage.setItem("lastOrder", JSON.stringify(orderData));
  localStorage.removeItem("cart");

  window.location.href = "../pages/order-success.html";
}

/* ------------------------------
   INIT
--------------------------------*/
renderCheckout();
