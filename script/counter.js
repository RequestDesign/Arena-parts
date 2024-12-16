// document.addEventListener("DOMContentLoaded", () => {
//   const counters = document.querySelectorAll(".orders-product_block-counter");

//   counters.forEach(counter => {
//       const orderCountElement = counter.querySelector(".order-count");
//       const decreaseButton = counter.querySelector(".decrease-button");
//       const increaseButton = counter.querySelector(".increase-button");

//       let productCount = 1;

//       function updateProductButtonState() {
//           if (productCount > 1) {
//               decreaseButton.classList.add("orders-circle_active");
//           } else {
//               decreaseButton.classList.remove("orders-circle_active");
//           }
//       }

//       updateProductButtonState();

//       increaseButton.addEventListener("click", () => {
//           productCount++;
//           orderCountElement.textContent = productCount;
//           updateProductButtonState();
//       });

//       decreaseButton.addEventListener("click", () => {
//           if (productCount > 1) {
//               productCount--;
//               orderCountElement.textContent = productCount;
//               updateProductButtonState();
//           }
//       });
//   });
// });


// const deliveryBtn = document.getElementById("delivery-btn");
// const pickupBtn = document.getElementById("pickup-btn");

// function toggleActiveButton(activeBtn, inactiveBtn) {
//   activeBtn.classList.add("catalog-btn_active");
//   inactiveBtn.classList.remove("catalog-btn_active");
// }

// deliveryBtn.addEventListener("click", () => {
//   toggleActiveButton(deliveryBtn, pickupBtn);
// });

// pickupBtn.addEventListener("click", () => {
//   toggleActiveButton(pickupBtn, deliveryBtn);
// });
