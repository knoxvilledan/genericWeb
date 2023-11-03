//Day 5 work
function greet(name) {
  return `Hello, ${name}!`;
}

function sum(a, b) {
  return a + b;
}

function factorial(n) {
  return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
// Advanced arrays
// Maps
var numbers = [1, 2, 3, 4, 5];
var squares = numbers.map(function (num) {
  return num * num;
});

// Filters
var evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

// Reduce
var sum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log(sum);

// Closures
function outerFunction() {
  let outerVariable = "I'm an outer variable";

  return function innerFunction() {
    console.log(outerVariable);
  };
}

const closure = outerFunction();
closure();

// Error Handling
// Try/Catch
function divide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  } catch (err) {
    console.log(err.message);
  }
}

divide(10, 0);
// Day 9 Dom creation and Deletion
// Element creation

var ul = document.createElement("ul");
for (var i = 0; i < 3; i++) {
  var li = document.createElement("li");
  li.textContent = `Item ${(i = 1)}`;
  ul.appendChild(li);
}
document.body.appendChild(ul);
// Element Deletion
ul.removeChild(ul.childNodes[1]);

// Mouse Events
document.getElementById("button").addEventListener("mouseover", function () {
  this.style.backgroundColor = "red";
});
// Form Events
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("form is not allowed to submit");
});

// Arrow Functions
const newSum = function (a, b) {
  return a + b;
};

const newSumArrow = (a, b) => a + b;

// Destructuring
const person = { name: "Danny", age: 47 };
const { name, age } = person;

const array = [1, 2, 3];
const [first, second, thrid] = array;

// Spread & Rest
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = { ...obj1, ...obj2 };

const gatherArgs = (...args) => console.log(args);

// Asynchronous Javascript
// Callbacks
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});

// Promises
function fetchData() {
  return new Promis((resove, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
