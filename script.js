// Create basic functions
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operate = (num1, num2, op) => {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "/":
      return divide(num1, num2);
    case "*":
      return multiply(num1, num2);
  }
};

// Create our vars for later
let num1;
let num2;
let op;
