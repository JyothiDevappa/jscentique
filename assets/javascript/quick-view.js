// ================= QUICK VIEW (GLOBAL) =================
document.addEventListener("DOMContentLoaded", () => {

  const quickOverlay = document.getElementById("quickOverlay");
  const quickModal   = document.getElementById("quickModal");

  const qName  = document.getElementById("qName");
  const qPrice = document.getElementById("qPrice");
  const qSize  = document.getElementById("qSize");
  const qNotes = document.getElementById("qNotes");
  const qDesc  = document.getElementById("qDesc");
  const qImage = document.getElementById("qImage");

  // 🔓 expose globally (because HTML onclick uses it)
  window.openQuickView = function (
    name,
    price,
    size,
    notes,
    desc,
    image
  ) {
    if (!quickModal || !quickOverlay) return;

    qName.textContent  = name;
    qPrice.textContent = price;
    qSize.textContent  = size;
    qNotes.textContent = notes;
    qDesc.textContent  = desc;
    qImage.src         = image;

    quickOverlay.style.display = "block";
    quickModal.style.display   = "block";
  };

  window.closeQuickView = function () {
    if (!quickModal || !quickOverlay) return;

    quickOverlay.style.display = "none";
    quickModal.style.display   = "none";
  };

});
