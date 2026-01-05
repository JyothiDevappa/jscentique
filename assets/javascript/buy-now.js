/* ===============================
   GLOBAL BUY NOW → DIRECT CHECKOUT
================================= */
document.addEventListener("DOMContentLoaded", () => {

  const buyNowButtons = document.querySelectorAll(".buy-now");

  buyNowButtons.forEach(btn => {
    btn.addEventListener("click", event => {
      event.preventDefault();

      const checkoutItem = {
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: parseInt(btn.dataset.price),
        size: btn.dataset.size || "",
        image: btn.dataset.image,
        qty: 1
      };

      localStorage.setItem("checkoutItem", JSON.stringify(checkoutItem));

      // 🔥 SMART PATH FIX (works everywhere)
      const isInsidePages = window.location.pathname.includes("/pages/");
      const checkoutPath = isInsidePages
        ? "checkout.html"
        : "pages/checkout.html";

      window.location.href = checkoutPath;
    });
  });
});
