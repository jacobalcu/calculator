let operators = document.querySelectorAll(".arith");
let numbers = document.querySelectorAll(".numbers > button");
let clear = document.querySelectorAll(".clear");

// screen.textContent = "Hello";
let current = [];

const clearScreen = () => {
  let screen = document.querySelector(".screen");
  screen.textContent = "";
};

const writeNum = (e) => {
  let screen = document.querySelector(".screen");
  screen.textContent += e.target.textContent;
};

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

// Still working on it
operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    let screen = document.querySelector(".screen");
    current.push(screen.textContent);
    current.push(e.target.textContent);
    screen.textContent = e.target.textContent;
  });
});

clear.forEach((op) => {
  op.addEventListener("click", clearScreen);
});

numbers.forEach((num) => {
  num.addEventListener("click", (e) => writeNum(e));
});

// operators.forEach(operator => {
//   operator.addEventListener('click', )
// })

// Create our vars for later
let num1;
let num2;
let op;
