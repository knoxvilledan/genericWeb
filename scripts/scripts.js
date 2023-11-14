// *js code test for the new html doc that i'm writing.
// Write a function to turn all strings to all caps.
// Wanna ask Ashley how does he keep his notes?
// 110623 restart js ctd 1913

const myName = "Daniel";
let num1 = 10;
let num2 = 20;
let isLearning = true;
let sum = num1 + num2;
let difference = num2 - num1;
let product = num1 * num2;

console.log(myName);
console.log(num1);
console.log(num2);
console.log(isLearning);
console.log(sum, difference, product);
console.log(typeof myName);
console.log(typeof sum);
console.log(myName + " " + sum);

if (num1 > num2) {
  console.log(num1 + " is greater");
} else {
  console.log(num2 + " is greater");
}

let day = "Saturday";
switch (day) {
  case "Monday":
    console.log("Start the week!");
    break;
  case "Wednesday":
    console.log("Hump day!");
    break;
  case "Sunday":
    console.log("Rest day!");
    break;
  default:
    console.log("Plan better!");
}

function greet(name) {
  return "Hello, " + myName + "!";
}
console.log(greet());

function multiply(a, b) {
  return a * b;
}
console.log(multiply(num1, num2));

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

let fruits = ["apple", "banana", "cherry"];
fruits.push("date", "elderberry");
fruits.shift();

console.log(fruits.indexOf("cherry"));

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

let num3 = 10;
while (num3 >= 1) {
  console.log(num3);
  num3--;
}
let newNumbers = [1, 2, 3, 4, 5];
let newSum = 0;
for (let i = 0; i < newNumbers.length; i++) {
  newSum += newNumbers[i];
}
console.log(newSum);

let person = {
  firstName: myName,
  lastName: "Nelson",
  age: 47,
  jobTitle: "Developer",
};

person.fullName = function () {
  return this.firstName + " " + this.lastName;
};

person.birthday = function () {
  return this.age++;
};

console.log(person.fullName());
console.log(person.age);

person.birthday();
console.log(person.age);

// Obj to Array
function objectToArray(obj) {
  return Object.entries(obj);
}
console.log(objectToArray({ a: 1, b: 2, c: 3 }));

function greet(name) {
  return `Hello, ${name}!`;
}

function anotherSum(a, b) {
  return a + b;
}

console.log(anotherSum(6, 5));
// Factorial
function isFactorial(n) {
  return n === 0 || n === 1 ? 1 : n * isFactorial(n - 1);
}
console.log(isFactorial(6));
// Prime
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
// Maps
console.log(isPrime(5));
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function (num) {
  return num * num;
});

console.log(squares);
// Filters
let newNumbersFail = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Need to find better ways to name lets.
let evenNumbers = newNumbersFail.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

// Reduce
let newSumFail = newNumbersFail.reduce(function (acc, num) {
  // Need to find better ways to name lets.
  return acc + num;
}, 0);
console.log(newSumFail);

// Closures
function outerFunction() {
  let outerVariable = "I'm an outer variable";

  return function innerFunction() {
    console.log(outerVariable);
  };
}

// Try/Catch
function divide(a, b) {
  try {
    if (a === 0) throw new Error("Cannot divide with either number being zero");
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

console.log(divide(0, 10));

document.getElementById("header").textContent = "Hello, World";

var newDiv = document.createElement("div");
newDiv.textContent = "I'm new here!";
document.body.appendChild(newDiv);

document.getElementById("clickMe").addEventListener("click", function () {
  this.style.backgroundColor = "purple";
  alert("Button was clicked!");
});

var ul = document.createElement("ul");
let items = ["Start Strong", "Stay Strong", "Finish Strong"];
for (var i = 0; i < 3; i++) {
  let li = document.createElement("li");
  li.textContent = items[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);
// Element Deletion
ul.removeChild(ul.childNodes[1]);

// Mouse Events
document
  .getElementById("hoverButton")
  .addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
  })
  /*
  .addEventListener("click", function () {
    this.style.backgroundColor = "purple";
  }); 
   Was trying to use this click function here to add a color change after a button 
   was clicked. Probably gonna have to try it NEXT TOUCH */


// Form Events
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form is not allowed to submit");
});
/* The CSS on this form looks ugly AF, will want to change it later. 
I commented out the css so it's just html on "website" */



