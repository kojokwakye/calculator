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

function operate() {
  let a = Number(window.prompt("Type a number", ""));
  let operator = window.prompt("Type an operator (+, -, *, /)", "");
  let b = Number(window.prompt("Type a number", ""));
  console.log(a, operator, b);

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

console.log(operate());
