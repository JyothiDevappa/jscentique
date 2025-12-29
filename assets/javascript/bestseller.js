const qvOverlay = document.getElementById("qvOverlay");
const qvModal = document.getElementById("qvModal");

const qvName = document.getElementById("qvName");
const qvPrice = document.getElementById("qvPrice");
const qvSize = document.getElementById("qvSize");
const qvNotes = document.getElementById("qvNotes");
const qvDesc = document.getElementById("qvDesc");
const qvImage = document.getElementById("qvImage");

function openQuickView(name, price, size, notes, desc, img) {
  qvName.innerText = name;
  qvPrice.innerText = price;
  qvSize.innerText = size;
  qvNotes.innerText = notes;
  qvDesc.innerText = desc;
  qvImage.src = img;

  qvOverlay.style.display = "block";
  qvModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  qvOverlay.style.display = "none";
  qvModal.style.display = "none";
  document.body.style.overflow = "";
}



function toggleWishlist(btn) {
  btn.classList.toggle("active");

  // OPTIONAL: store wishlist in localStorage
  const product = btn.closest(".product");
  const name = product.querySelector("h3").innerText;

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (btn.classList.contains("active")) {
    wishlist.push(name);
  } else {
    wishlist = wishlist.filter(item => item !== name);
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
