const input = document.getElementById("screen");
const numberBtns = document.querySelectorAll(".digits");
const operatorBtns = document.querySelectorAll(".operator-btn");
const dotBtn = document.querySelector(".dot");
const ac = document.getElementById("clear-screen"); // clear btn

// display operation
let displayCurrent = document.querySelector("#current");
let displayPrevious = document.querySelector("#previous");

numberBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    displayCurrent.textContent += event.target.textContent;
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    displayCurrent.textContent += event.target.textContent;
  });
});
// functions for each operation
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// three variables for each of the parts of a calculator operation.
let a = "";
let b = "";
let operator = "";

function operate(a, operator, b) {
  let result;
  // call the appropriate function based on the operator
  if (operator === "+") {
    result = add(a, b);
  } else if (operator === "-") {
    result = subtract(a, b);
  } else if (operator === "*") {
    result = multiply(a, b);
  } else if (operator === "/") {
    result = divide(a, b);
  } else {
    result = "Invalid operator";
  }

  return result;
}
