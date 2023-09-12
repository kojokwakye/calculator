const input = document.getElementById("screen"); // main screen
const numberBtns = document.querySelectorAll(".digits");
const operatorBtns = document.querySelectorAll(".operator-btn");
const dotBtn = document.querySelector(".dot"); // point
const solve = document.getElementById("equal"); // equal to
const ac = document.getElementById("clear-screen"); // clear btn

// display operation
let displayCurrent = document.querySelector("#current"); // green screen
let displayPrevious = document.querySelector("#previous"); // blue screen

// store operands
let a = ""; // store the first operand
let operator = ""; // store the operator
let waitForSecondOperand = false; //  wait for the second operand

numberBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (waitForSecondOperand) {
      displayCurrent.textContent = event.target.textContent;
      waitForSecondOperand = false;
    } else {
      displayCurrent.textContent += event.target.textContent;
    }
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (a && operator && !waitForSecondOperand) {
      b = displayCurrent.textContent;
      operate();
      a = displayCurrent.textContent;
    } else {
      a = displayCurrent.textContent;
    }

    operator = event.target.textContent;
    waitForSecondOperand = true; // clear the current input and start a new input for the second operand.
  });
});

// clear both screens
ac.addEventListener("click", () => {
  a = "";
  operator = "";
  displayCurrent.textContent = "";
  displayPrevious.textContent = "";
});

// equal to sign
solve.addEventListener("click", () => {
  if (a && operator && !waitForSecondOperand) {
    b = displayCurrent.textContent;
    operate();
    a = "";
    operator = "";
    waitForSecondOperand = true; // clear the current input and start a new input for the second operand.
  }
});

// functions for each operation
function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

function operate() {
  let result;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      if (b === "0") {
        result = "Error: Division by zero";
      } else {
        result = divide(a, b);
      }
      break;
    default:
      result = "Invalid operator";
  }

  displayPrevious.textContent = `${a} ${operator} ${b} =`;
  displayCurrent.textContent = result;
}
