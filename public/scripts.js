//reset the plan. day 4. 400-
//variables
let myName = "Daniel";
let age = 2023 - 1976;
let num1 = 10;
let num2 = 20;
let isLearning = true;
let sum = num1 + num2;
let difference = num2 - num1;
let product = num1 * num2;

console.log(
  "Hello, Loved ones this is",
  myName,
  "and I AM now",
  age,
  "years old."
);
// Opt num1 & 2)
console.log(num1, num2);
console.log("Keep Going, Keep Moving Forward!");
console.log(`This is the Sum: ${sum}`);
console.log(`This is the Difference ${difference}`);
console.log(`Here is the product ${product}`);
console.log(`Type of Data in var myName: ${typeof myName}`);
console.log(`Type of Data in var sum: ${typeof sum}`);
console.log(`Test to add a 'string' and 'number': ${myName} ${sum}`);
// Turned all about into template literals
// Conditional statement
console.log(num1 > num2 ? "'num1' is greater" : "'num2' is greater");

/* if (num1 > num2) {
  console.log("'num1' is greater");
} else {
  console.log("'num2' is greater");
}*/

let day = "Sunday";
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
    console.log("Work smarter!");
    break;
}
//optimized function
function greet() {
  let greetMessage = `Hello ${myName}!`;
  console.log(greetMessage);
}
greet();

// Optimized function
function multiply(a, b) {
  return a * b;
}
console.log(multiply(num1, num2));

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

/* Optimized this is statement 
  {  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}*/

console.log(factorial(5));
//part 2. 400-710 (3 hours). wifey pickup -.5 = 2.5 hours

let fruits = ["apple", "banana", "cherry"];
fruits.push("date", "elderberry");
fruits.shift();

console.log("Cherry is now in index:", fruits.indexOf("cherry"));
/* AI wanted me to make this change, but I couldn't get it to print so I switched it back.
fruits.forEach((fruits) => console.log(fruits));
fruits
  .slice()
  .reverse()
  .forEach((fruits) => console.log(fruits));
*/

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

// 900
let num = sum;
while (num > 0) {
  console.log(num);
  num--;
}

let mynumBers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let totalSum = mynumBers.reduce((acc, curr) => acc + curr, 0);
console.log(totalSum);
//0939 pause for optimization
//1200 back at it.

let person = {
  firstName: myName,
  lastName: "Nelson",
  presentAge: `${age}`,
  jobTitle: "Baby Web Developer",

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },

  birthday: function () {
    return Number(this.presentAge) + 1;
  },
};
console.log(person.fullName());
console.log(person.birthday());

// DOM work. Chat is guiding me. This is all chatGPT.I've never experienced this, not yet but it's coming
document.getElementById("header").textContent = "Old Header";

var newDiv = document.createElement("div");
newDiv.textContent = "I'm new here!";
document.body.appendChild(newDiv);

document.getElementById("clickMe").addEventListener("click", function () {
  alert("Button was clicked!");
});
