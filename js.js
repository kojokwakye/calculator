function operate() {
  let a = Number(window.prompt("Type a number", ""));
  let operator = window.prompt("Type an operator (+, -, *, /)", "");
  let b = Number(window.prompt("Type a number", ""));
  console.log(a, operator, b);

  let operators = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
  };
  if (operators.hasOwnProperty(operator)) {
    return operators[operator](a, b);
  } else {
    return "invalid operator";
  }
}
console.log(operate());
