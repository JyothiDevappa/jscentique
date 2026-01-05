// document.addEventListener("DOMContentLoaded", () => {

//   const quickOverlay = document.getElementById("quickOverlay");
//   const quickModal   = document.getElementById("quickModal");

//   const qName  = document.getElementById("qName");
//   const qPrice = document.getElementById("qPrice");
//   const qSize  = document.getElementById("qSize");
//   const qNotes = document.getElementById("qNotes");
//   const qDesc  = document.getElementById("qDesc");
//   const qImage = document.getElementById("qImage");

//   window.openQuickView = function (
//     name,
//     price,
//     size,
//     notes,
//     desc,
//     image
//   ) {
//     if (!quickModal || !quickOverlay) return;

//     qName.textContent  = name;
//     qPrice.textContent = price;
//     qSize.textContent  = size;
//     qNotes.textContent = notes;
//     qDesc.textContent  = desc;
//     qImage.src         = image;

//     quickOverlay.style.display = "block";
//     quickModal.style.display   = "block";
//   };

//   window.closeQuickView = function () {
//     if (!quickModal || !quickOverlay) return;

//     quickOverlay.style.display = "none";
//     quickModal.style.display   = "none";
//   };

// });







// document.addEventListener("DOMContentLoaded", () => {

//   const quickOverlay = document.getElementById("quickOverlay");
//   const quickModal   = document.getElementById("quickModal");

//   const qName  = document.getElementById("qName");
//   const qPrice = document.getElementById("qPrice");
//   const qSize  = document.getElementById("qSize");
//   const qNotes = document.getElementById("qNotes");
//   const qDesc  = document.getElementById("qDesc");
//   const qImage = document.getElementById("qImage");

//   const qBuyBtn = document.querySelector(".btn-buy");

//   let currentProduct = {};

//   window.openQuickView = function (
//     name,
//     priceText,
//     size,
//     notes,
//     desc,
//     image
//   ) {
//     const cleanPrice = parseInt(
//       priceText.replace(/[₹,\s]/g, "")
//     );

//     currentProduct = {
//       id: name.toLowerCase().replace(/\s+/g, "-"),
//       name,
//       price: cleanPrice,
//       size,
//       image,
//       qty: 1
//     };

//     qName.textContent  = name;
//     qPrice.textContent = priceText;
//     qSize.textContent  = size;
//     qNotes.textContent = notes;
//     qDesc.textContent  = desc;
//     qImage.src         = image;

//     quickOverlay.style.display = "block";
//     quickModal.style.display   = "block";
//   };

//   window.closeQuickView = function () {
//     quickOverlay.style.display = "none";
//     quickModal.style.display   = "none";
//   };

//   qBuyBtn.addEventListener("click", () => {
//     localStorage.setItem(
//       "checkoutItem",
//       JSON.stringify(currentProduct)
//     );

//     closeQuickView();
//     window.location.href = "pages/checkout.html";
//   });

// });












// document.addEventListener("DOMContentLoaded", () => {

//   const quickOverlay = document.getElementById("quickOverlay");
//   const quickModal   = document.getElementById("quickModal");

//   const qName  = document.getElementById("qName");
//   const qPrice = document.getElementById("qPrice");
//   const qSize  = document.getElementById("qSize");
//   const qNotes = document.getElementById("qNotes");
//   const qDesc  = document.getElementById("qDesc");
//   const qImage = document.getElementById("qImage");

//   const buyBtn = document.querySelector(".btn-buy");

//   window.openQuickView = function (
//     name,
//     price,
//     size,
//     notes,
//     desc,
//     image
//   ) {
//     if (!quickModal || !quickOverlay) return;

//     qName.textContent  = name;
//     qPrice.textContent = price;
//     qSize.textContent  = size;
//     qNotes.textContent = notes;
//     qDesc.textContent  = desc;
//     qImage.src         = image;

//     // store product for Buy Now
//     buyBtn.dataset.name  = name;
//     buyBtn.dataset.price = price.replace(/[₹, ]/g, "");
//     buyBtn.dataset.size  = size;
//     buyBtn.dataset.image = image;

//     quickOverlay.style.display = "block";
//     quickModal.style.display   = "block";
//   };

//   window.closeQuickView = function () {
//     if (!quickModal || !quickOverlay) return;

//     quickOverlay.style.display = "none";
//     quickModal.style.display   = "none";
//   };

//   if (buyBtn) {
//     buyBtn.addEventListener("click", () => {
//       const product = {
//         name: buyBtn.dataset.name,
//         price: buyBtn.dataset.price,
//         size: buyBtn.dataset.size,
//         image: buyBtn.dataset.image
//       };

//       localStorage.setItem("buyNowProduct", JSON.stringify(product));

//       window.location.href = "../pages/checkout.html";
//     });
//   }

// });

















// ================= QUICK VIEW =================
document.addEventListener("DOMContentLoaded", () => {

  const quickOverlay = document.getElementById("quickOverlay");
  const quickModal   = document.getElementById("quickModal");

  const qName  = document.getElementById("qName");
  const qPrice = document.getElementById("qPrice");
  const qSize  = document.getElementById("qSize");
  const qNotes = document.getElementById("qNotes");
  const qDesc  = document.getElementById("qDesc");
  const qImage = document.getElementById("qImage");

  const buyBtn = document.querySelector(".btn-buy");

  // store current product
  let quickProduct = null;

  // ===== OPEN QUICK VIEW =====
  window.openQuickView = function (
    name,
    price,
    size,
    notes,
    desc,
    image
  ) {
    qName.textContent  = name;
    qPrice.textContent = price;
    qSize.textContent  = size;
    qNotes.textContent = notes;
    qDesc.textContent  = desc;
    qImage.src         = image;

    // store product like buy.js
    quickProduct = {
      id: "quick-view-item",
      name: name,
      price: parseInt(price.replace(/[^\d]/g, "")),
      size: size,
      image: image,
      qty: 1
    };

    quickOverlay.style.display = "block";
    quickModal.style.display   = "block";
  };

  // ===== CLOSE QUICK VIEW =====
  window.closeQuickView = function () {
    quickOverlay.style.display = "none";
    quickModal.style.display   = "none";
  };

  // ===== QUICK VIEW BUY NOW =====
  buyBtn.addEventListener("click", () => {
    if (!quickProduct) return;

    // SAME KEY used by checkout page
    localStorage.setItem("checkoutItem", JSON.stringify(quickProduct));

    // smart path
    const isInsidePages = window.location.pathname.includes("/pages/");
    window.location.href = isInsidePages
      ? "checkout.html"
      : "pages/checkout.html";
  });

});
