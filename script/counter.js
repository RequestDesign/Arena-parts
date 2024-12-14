document.addEventListener("DOMContentLoaded", () => {
  const orderCountElement = document.getElementById("orderCount");
  const decreaseButton = document.getElementById("decreaseButton");
  const increaseButton = document.getElementById("increaseButton");

  let productCount = 1;

  function updateProductButtonState() {
    if (productCount > 1) {
      decreaseButton.classList.add("orders-circle_active");
    } else {
      decreaseButton.classList.remove("orders-circle_active");
    }
  }
  updateProductButtonState();
  increaseButton.addEventListener("click", () => {
    productCount++;
    orderCountElement.textContent = productCount;
    updateProductButtonState();
  });

  decreaseButton.addEventListener("click", () => {
    if (productCount > 1) {
      productCount--;
      orderCountElement.textContent = productCount;
      updateProductButtonState();
    }
  });
});
