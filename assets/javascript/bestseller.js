function openQuickView(name, price, size, notes, desc, img, tag = "BEST SELLER") {
  qvName.innerText = name;
  qvPrice.innerText = price;
  qvSize.innerText = size;
  qvNotes.innerText = notes;
  qvDesc.innerText = desc;
  qvImage.src = img;
  qvTag.innerText = tag;

  qvOverlay.style.display = "block";
  qvModal.style.display = "block";
}

function closeQuickView() {
  qvOverlay.style.display = "none";
  qvModal.style.display = "none";
}

function toggleHeart(el) {
  el.classList.toggle("active");
}



function openCartDrawer() {
  document.getElementById("cartDrawer").classList.add("open");
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("open");
}
