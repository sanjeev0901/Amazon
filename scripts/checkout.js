import { products } from "../data/products.js";
import { cart as cartItems } from "./cart.js";

const getProduct = (id) => {
  let matchingItem = null;
  for (const item of products) {
    if (item.id == id) {
      matchingItem = item;
      break; // Exit the loop early
    }
  }
  return matchingItem;
};

function renderCart() {
  let cartHTML = "";
  cartItems.forEach((item) => {
    const product = getProduct(item.id);
    const { quantity } = item;
    const html = /*HTML*/ `
      <div class="cart-item-container">
          <div class="delivery-date">Delivery date: Tuesday, June 21</div>

          <div class="cart-item-details-grid">
              <img
              class="product-image"
              src="${product.image}"
              />

              <div class="cart-item-details">
              <div class="product-name">
                  ${product.name}
              </div>
              <div class="product-price">${(product.priceCents / 100).toFixed(
                2
              )}</div>
              <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${quantity}</span> </span>
                  <span class="update-quantity-link link-primary">
                  Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                  Delete
                  </span>
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
                  name="delivery-option-${product.id}"
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
                  name="delivery-option-${product.id}"
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
                  name="delivery-option-${product.id}"
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
}
renderCart();
