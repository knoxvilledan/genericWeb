// *js code test for the new html doc that i'm writing.
// Write a function to turn all strings to all caps.
// Wanna ask Ashley how does he keep his notes?

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
// 355 am starting agian
let fruits = ["apple", "banana", "cherry"];
fruits.push("date", "elderberry");
fruits.shift(0);
console.log(fruits.indexOf("cherry"));

for (let i = 0; i < fruits.length; i++) {
  console.log();
}

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

let num3 = 10;
while (num3 >= 1) {
  console.log(num1);
  num3--;
}

let num4 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < num4.length; i++) {
  sum2 += num4[i];
}
console.log(sum2);

let person = {
  firstName: `${myName}`,
  lastName: "Does It",
  age: 47,
  jobTitle: "Todler Web Developer",
};

person.fullName = function () {
  return this.firstName + " " + this.lastName;
};

person.birthday = function () {
  this.age++;
};

console.log(person.fullName());
person.birthday();
console.log(person.age);
