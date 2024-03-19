function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  //... your code goes here
}

function calculateAll() {
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
}

function removeProduct(event) {
  //... your code goes here
}

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here
});
