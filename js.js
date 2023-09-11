const screen = document.getElementById("screen");
const btns = document.querySelectorAll(".digits, .operator-btn");

const markBtn = (btn) => {
  console.log(btn);
};

btns.forEach((btn) =>
  btn.addEventListener("click", () =>
    markBtn((screen.textContent = btn.textContent))
  )
);

let displayValue = "";

// clear btn
const ac = document.getElementById("clear-screen");
ac.addEventListener("click", clearDisplay);
function clearDisplay() {
  screen.textContent = "";
}

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
console.log(operate(5, "*", 3));
