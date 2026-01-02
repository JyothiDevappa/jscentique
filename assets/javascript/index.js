// quik view

  
const quickOverlay = document.getElementById('quickOverlay');
const quickModal = document.getElementById('quickModal');
const qName = document.getElementById('qName');
const qPrice = document.getElementById('qPrice');
const qSize = document.getElementById('qSize');
const qNotes = document.getElementById('qNotes');
const qDesc = document.getElementById('qDesc');
const qImage = document.getElementById('qImage');

function openQuickView(name, price, size, notes, desc, img) {
  qName.innerText = name;
  qPrice.innerText = price;
  qSize.innerText = size;
  qNotes.innerText = notes;
  qDesc.innerText = desc;
  qImage.src = img;
  quickOverlay.style.display = 'block';
  quickModal.style.display = 'block';
}
function closeQuickView() {
  quickOverlay.style.display = 'none';
  quickModal.style.display = 'none';
}
function toggleHeart(btn){
  btn.classList.toggle('active');
}



// buy now

function buyNow(e, btn) {
      e.preventDefault();

      const item = {
        name: btn.dataset.name,
        price: btn.dataset.price,
        size: btn.dataset.size,
        image: btn.dataset.image,
        qty: 1
      };

      localStorage.setItem("checkoutItem", JSON.stringify(item));
      window.location.href = "pages/checkout.html";
    }


    // cart script

   function getCart() {
      return JSON.parse(localStorage.getItem("cart")) || [];
    }

    function saveCart(cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
    }

    function updateCartCount() {
      const cart = getCart();
      document.getElementById("cartCount").innerText =
        cart.reduce((t, i) => t + i.qty, 0);
    }

    function addToCart(e, btn) {
      e.preventDefault();

      const cart = getCart();
      const name = btn.dataset.name;

      const found = cart.find(p => p.name === name);
      if (found) found.qty += 1;
      else cart.push({
        name,
        price: btn.dataset.price,
        size: btn.dataset.size,
        image: btn.dataset.image,
        qty: 1
      });

      saveCart(cart);
      showCartPopup(name);
    }

    function showCartPopup(name) {
      const popup = document.getElementById("cartPopup");
      document.getElementById("cartPopupText").innerText = `${name} added successfully`;
      popup.style.display = "block";
      setTimeout(() => popup.style.display = "none", 1500);
    }

    function redirectCart() {
      window.location.href = "pages/cart.html";
    }

    updateCartCount();










    

    // Set launch date (example: 3 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 3);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
      const now = new Date();
      const diff = launchDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      daysEl.textContent = days.toString().padStart(2, '0');
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();