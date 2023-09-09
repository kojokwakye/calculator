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

let addition = "+";
console.log(operators[addition](3, 5));

let subtraction = "-";
console.log(operators[subtraction](3, 5));

let multiply = "*";
console.log(operators[multiply](3, 5));

let divide = "/";
console.log(operators[divide](3, 5));
