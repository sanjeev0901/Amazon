let cart = JSON.parse(localStorage.getItem("cart")) || [];

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
function deleteItems(button) {
  const { productId } = button.dataset;
  cart = cart.filter((item) => {
    return item.id != productId;
  });
  saveToStorage();
}
export { cart, setItemsInCart, getItemsInCart, deleteItems };
