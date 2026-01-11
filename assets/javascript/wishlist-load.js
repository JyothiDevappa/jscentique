function renderWishlist() {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const grid = document.getElementById("wishlistGrid");
    const empty = document.getElementById("emptyWishlist");

    grid.innerHTML = "";

    if (wishlist.length === 0) {
        empty.style.display = "block";
        return;
    }

    empty.style.display = "none";

    wishlist.forEach(item => {
        grid.innerHTML += `
          <div class="wishlist-card">
            <img src="${item.image}" alt="Product Image">

            <div class="wishlist-info">
              <h4>J SCENTIQUE</h4>
              <p>${item.size}</p>

              <div class="wishlist-price">₹${item.price}</div>


             

<div class="wishlist-actions">
  <a href="#"
     class="buy-now"
     data-id="${item.id}"
     data-name="${item.name}"
     data-price="${item.price}"
     data-size="${item.size}"
     data-image="${item.image}">
     Buy Now
  </a>

  <button class="wishlist-remove"
    onclick="removeFromWishlist('${item.id}')">
    Remove
  </button>
</div>



            </div>
          </div>
        `;
    });
}

function removeFromWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
}

document.addEventListener("DOMContentLoaded", renderWishlist);