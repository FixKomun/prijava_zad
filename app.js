//Selector
const itemList = document.querySelectorAll(".item");
const buttonUp = document.querySelector(".button-up");
const buttonDown = document.querySelector(".button-down");
const buttonCart = document.querySelector(".cart-img");

//Listeners
buttonUp.addEventListener("click", moveUp);
buttonDown.addEventListener("click", moveDown);
buttonCart.addEventListener("click", showHide);
//Remove divs
itemList[3].remove();
itemList[4].remove();
console.log(itemList);
function moveUp() {}

function moveDown() {}

function showHide() {
  var cart = document.querySelector(".cart-container");
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}
