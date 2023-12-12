// *js code test for the new html doc that i'm writing.
// Write a function to turn all strings to all caps.
// Wanna ask Ashley how does he keep his notes?
// 110623 restart js ctd 1913

// My Instructions for DOM Manipulation (Add to HTML and Add in CSS)
/*
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
   was clicked. Probably gonna have to try it NEXT TOUCH 8/


// Form Events 
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form is not allowed to submit");
});
/* The CSS on this form looks ugly AF, will want to change it later. 
I commented out the css so it's just html on "website" 
// merge

// 11-16-2023
// Asynchronous JS

// Arrow Functions
// Traditional function Expression
const sum4 = function (a, b) {
  return a + b;
};
// Arrow funcion
/* const sumArrow = (a, b) => a + b;
  return a + b;
console.log(sumArrow)
// (How do you console.log this?)

// Destructuring
const person3 = { name: "John", age: 30 };
const { name, age } = person3;
console.log(person3);

const array = [1, 2, 3];
const [first, second, third] = array;
*/
