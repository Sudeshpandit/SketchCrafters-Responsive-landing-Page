// Function to add an item to the wishlist
function addToWishlist(item) {
  const wishlist = document.getElementById('wishlist');
  const listItem = document.createElement('li');
  listItem.textContent = item;
  wishlist.appendChild(listItem);
}
