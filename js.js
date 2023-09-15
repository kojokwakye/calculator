const numberBtns = document.querySelectorAll(".digits");
const operatorBtns = document.querySelectorAll(".operator-btn");
const solve = document.getElementById("equal"); // equal to
const ac = document.getElementById("clear-screen"); // clear btn
const deleteNumber = document.getElementById("delete");

// display operation
let displayCurrent = document.querySelector("#current"); // first screen
let displayPrevious = document.querySelector("#previous"); // second screen

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
// delete last number
deleteNumber.addEventListener("click", () => {
  let currentText = displayCurrent.textContent;
  currentText = currentText.slice(0, -1); // remove the last character
  displayCurrent.textContent = currentText;
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
        result = "error";
      } else {
        Math.round((result = divide(a, b)));
      }
      break;
    default:
      result = "Invalid operator";
  }
  // round up numbers
  result = parseFloat(parseFloat(result).toFixed(3)); // rounded value

  displayPrevious.textContent = `${a} ${operator} ${b} = `;
  displayCurrent.textContent = `${result}`;
}
