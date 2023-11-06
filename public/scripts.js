//243 am
let myName = "Daniel";
let num1 = 10;
let num2 = 20;
let isLearning = true;
let sum = num1 + num2;
let difference = num2 - num1;
let product = num1 * num2;

console.log(myName);
console.log(num1);
console.log(num2);
console.log(sum);
console.log(difference);
console.log(product);
console.log(typeof myName);
console.log(typeof sum);
console.log(myName + " " + sum);

if (num1 > num2) {
  console.log("'Num1' is greater");
} else {
  console.log("'Num2' is greater");
}

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Wednesday":
    console.log("Hump day!");
    break;
  case "Sunday":
    console.log("Rest day!");
    break;
  default:
    console.log("Work harder!");
}

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet(myName));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 5));

function factorial(n) {
  return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));
