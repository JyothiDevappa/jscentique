const arrivalQuickOverlay = document.getElementById("arrivalQuickOverlay");
const arrivalQuickModal = document.getElementById("arrivalQuickModal");

const arrivalQName = document.getElementById("arrivalQName");
const arrivalQPrice = document.getElementById("arrivalQPrice");
const arrivalQSize = document.getElementById("arrivalQSize");
const arrivalQNotes = document.getElementById("arrivalQNotes");
const arrivalQDesc = document.getElementById("arrivalQDesc");
const arrivalQNameImage = document.getElementById("arrivalQNameImage");

function openArrivalQuickView(name, price, size, notes, desc, img) {
  arrivalQName.innerText = name;
  arrivalQPrice.innerText = price;
  arrivalQSize.innerText = size;
  arrivalQNotes.innerText = notes;
  arrivalQDesc.innerText = desc;
  arrivalQNameImage.src = img;

  arrivalQuickOverlay.style.display = "block";
  arrivalQuickModal.style.display = "block";
}

function closeArrivalQuickView() {
  arrivalQuickOverlay.style.display = "none";
  arrivalQuickModal.style.display = "none";
}

function toggleHeart(btn) {
  btn.classList.toggle("active");
}
