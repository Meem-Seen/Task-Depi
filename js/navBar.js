const cartIcon = document.querySelector('.fa-cart-shopping');
  const cartOverlay = document.getElementById('cartOverlay');
  const closeCart = document.getElementById('closeCart');

  cartIcon.addEventListener('click', () => {
    cartOverlay.classList.add('active');
  });

  closeCart.addEventListener('click', () => {
    cartOverlay.classList.remove('active');
  });

const favoriteIcon = document.querySelector('.fa-heart');
const favoritesOverlay = document.getElementById('favoritesOverlay');
const closeFavorites = document.getElementById('closeFavorites');
const favoritesCount = document.querySelector('.favorites_count');

favoriteIcon.addEventListener('click', () => {
  favoritesOverlay.classList.add('active');
});

closeFavorites.addEventListener('click', () => {
  favoritesOverlay.classList.remove('active');
});

let favNumber = 0;
function addToFavorites() {
  favNumber++;
  favoritesCount.textContent = favNumber;
}