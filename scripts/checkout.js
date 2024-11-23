import { products } from "../data/products.js";
import { cart as cartItems, deleteItems } from "./cart.js";

const getProduct = (productInCart) => {
  const { id, quantity } = productInCart;
  let matchingItem = null;
  for (const item of products) {
    if (item.id == id) {
      matchingItem = item;
      break; // Exit the loop early
    }
  }
  matchingItem.quantity = quantity;
  return matchingItem;
};

function renderCart() {
  let cartHTML = "";
  cartItems.forEach((item) => {
    const { id, name, quantity, image, priceCents } = getProduct(item);
    const html = /*HTML*/ `
      <div class="cart-item-container">
          <div class="delivery-date">Delivery date: Tuesday, June 21</div>

          <div class="cart-item-details-grid">
              <img
              class="product-image"
              src="${image}"
              />

              <div class="cart-item-details">
              <div class="product-name">
                  ${name}
              </div>
              <div class="product-price">${(priceCents / 100).toFixed(2)}</div>
              <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${quantity}</span> </span>
                  <span class="update-quantity-link link-primary">
                  Update
                  </span>
                  <button class="delete-quantity-link link-primary js-delete-button" data-product-id=${id}>
                  Delete
                  </button>
              </div>
              </div>

              <div class="delivery-options">
              <div class="delivery-options-title">
                  Choose a delivery option:
              </div>
              <div class="delivery-option">
                  <input
                  type="radio"
                  checked
                  class="delivery-option-input"
                  name="delivery-option-${id}"
                  />
                  <div>
                  <div class="delivery-option-date">Tuesday, June 21</div>
                  <div class="delivery-option-price">FREE Shipping</div>
                  </div>
              </div>
              <div class="delivery-option">
                  <input
                  type="radio"
                  class="delivery-option-input"
                  name="delivery-option-${id}"
                  />
                  <div>
                  <div class="delivery-option-date">Wednesday, June 15</div>
                  <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
              </div>
              <div class="delivery-option">
                  <input
                  type="radio"
                  class="delivery-option-input"
                  name="delivery-option-${id}"
                  />
                  <div>
                  <div class="delivery-option-date">Monday, June 13</div>
                  <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
              </div>
              </div>
          </div>
      </div>
      `;
    cartHTML += html;
  });
  document.querySelector(".order-summary").innerHTML = cartHTML;
  document.querySelectorAll(".js-delete-button").forEach((button) => {
    button.addEventListener("click", () => {
      deleteItems(button);
      renderCart();
    });
  });
}

renderCart();
