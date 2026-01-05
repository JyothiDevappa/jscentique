/* ===============================
   GLOBAL BUY NOW → DIRECT CHECKOUT
================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Find all buy-now buttons
  const buyNowButtons = document.querySelectorAll(".buy-now");

  buyNowButtons.forEach(btn => {
    btn.addEventListener("click", event => {
      event.preventDefault();

      const productId = btn.getAttribute("data-id");
      const productName = btn.getAttribute("data-name");
      const productPrice = parseInt(btn.getAttribute("data-price"));
      const productSize = btn.getAttribute("data-size") || "";
      const productImage = btn.getAttribute("data-image");

      // Build checkout item
      const checkoutItem = {
        id: productId,
        name: productName,
        price: productPrice,
        size: productSize,
        image: productImage,
        qty: 1
      };

      // Save to localStorage
      localStorage.setItem("checkoutItem", JSON.stringify(checkoutItem));

      // Redirect to checkout page
      window.location.href = "/pages/checkout.html";
    });
  });
});
