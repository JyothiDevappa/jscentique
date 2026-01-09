// ================= CART POPUP (GLOBAL) =================
function showCartPopup(productName = "Item") {
  const popup = document.getElementById("cartPopup");
  const text  = document.getElementById("cartPopupText");

  if (!popup || !text) return;

  text.innerText = `${productName} added to cart`;

  popup.classList.add("show");

  clearTimeout(popup.hideTimer);
  popup.hideTimer = setTimeout(() => {
    popup.classList.remove("show");
  }, 2200);
}
