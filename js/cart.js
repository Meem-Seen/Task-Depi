let count = 1;
const productsContainer = document.getElementById("products")
const cartItems = document.querySelector(".cart_items")
const cartCounter = document.getElementById("cartCounter")
const totalAmount = document.querySelector(".total_amount")
const favContainer = document.querySelector(".favorites_items")
const favCounter = document.querySelector(".fav-count")

let cart = JSON.parse(localStorage.getItem("cart")) || []
let favorites = JSON.parse(localStorage.getItem("favorites")) || []

productsContainer.addEventListener("click", function (e) {
  const card = e.target.closest(".pro")
  if (!card) return;

  const title = card.querySelector("h3").innerText
  const price = parseFloat(card.querySelector(".price").innerText.replace("$", ""))
  const itemCount = parseInt(card.querySelector(".count").innerText)

 if(isLoggedIn()){
  if (e.target.classList.contains("add-cart")) {
    const existingIndex = cart.findIndex(item => item.title === title)
    if (existingIndex >= 0) {
      cart[existingIndex].count += itemCount
    } else {
      cart.push({ title, price, count: itemCount })
    }
    saveCart()
    renderCart()
  } }
  else{
    window.location.href = "login.html";
    }
 if(isLoggedIn()){
  if (e.target.classList.contains("favourite")) {
    const card = e.target.closest(".pro")
    const title = card.querySelector("h3").innerText
    const price = card.querySelector(".price").innerText

    if (!favorites.find((item) => item.title === title)) {
      favorites.push({ title, price })
    }

    saveFav()
    renderFav()
  }}
  else{
    window.location.href = "login.html";
  }
})

function renderCart() {
  cartItems.innerHTML = ""
  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <div class="cart_item">
        <div class="item_name"><strong>${item.title}</strong></div>
        <div class="item_count"><strong>${item.count}</strong></div>
        <div class="item_price">$${(item.price*item.count).toFixed(2)}</div>
        <span class="remove_item" data-index="${index}">🗑</span>
      </div>
    `
  })
  updateTotal()
  updateCartCounter()
}

cartItems.onclick = function (e) {
  if (e.target.classList.contains("remove_item")) {
    cart.splice(e.target.dataset.index, 1)
    saveCart()
    renderCart()
  }
}

function updateTotal() {
  let total = 0
  cart.forEach(item => total += item.price * item.count)
  totalAmount.innerText = "$" + total.toFixed(2)
}

function updateCartCounter() {
  let totalItems = 0
  cart.forEach(item => totalItems += item.count)
  cartCounter.innerText = totalItems
}

function renderFav() {
  favContainer.innerHTML = ""
  favorites.forEach((item, index) => {
    favContainer.innerHTML += `
      <div class="favorite_item">
        <div class="item_name">
          <strong>${item.title}</strong>
        </div>
        <div class="item_price">${item.price}</div>
        <span class="removeFav" data-index="${index}">&times;</span>
      </div>
    `
  })
  updateFavCounter()
}

favContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("removeFav")) {
    favorites.splice(e.target.dataset.index, 1)
    saveFav()
    renderFav()
  }
})

function updateFavCounter() {
  favCounter.innerText = favorites.length
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}
function saveFav() {
  localStorage.setItem("favorites", JSON.stringify(favorites))
}

renderCart()
renderFav()
