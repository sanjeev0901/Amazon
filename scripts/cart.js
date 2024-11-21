let cart = JSON.parse(localStorage.getItem("cart"));

// if (!cart) {
//   cart = [];
// }

const saveToStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

function getItemsInCart() {
  let count = 0;
  JSON.parse(localStorage.getItem("cart")).forEach((product) => {
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
  saveToStorage();
}

const clearItems = () => {
  window.onload = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    console.log("Cart contents cleared");
  };
};
export { cart, setItemsInCart, getItemsInCart };
