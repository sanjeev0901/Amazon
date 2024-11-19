let cart = [];

function getItemsInCart() {
  let count = 0;
  cart.forEach((product) => {
    count += product.quantity;
  });
  return count;
}

function setItemsInCart(product, quantity = 1) {
  const { id } = product;
  let matchingItem;
  cart.forEach((item) => {
    if (item.id === id) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({ id, quantity });
  }
}

export { cart, setItemsInCart, getItemsInCart };
