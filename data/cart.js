let cart = [];

function addItemsToCart(cartArray, product) {
  const cart = cartArray;
  const { id } = product;
  let matchingItem;
  cart.forEach((item) => {
    if (item.id === id) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }
  return cart;
}
