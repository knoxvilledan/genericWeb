// Ok finally sitting down to code. 1254 Let's Go new branch : ctd5
let myName = "Daniel";
let num1 = 10;
let num2 = 20;
let isLearning = true;
let sum = num1 + num2;
let differnece = num2 - num1;
let product = num1 * num2;    

console.log(`My Name is: ${myName}`);
console.log(`Just a random number: ${num1}`);
console.log(`Another number: ${num2}`);
console.log(`Adding these up: ${sum}`);
console.log(`This is the Diff between them: ${differnece}`);
console.log(`This is the multiplication: ${product}`);
console.log(`Data type of myName var: ${typeof myName}`);
console.log(`Data type of sum var: ${typeof sum}`);
console.log(`Catenation of myName and sum var: ${myName + '' + sum}`);

let result = num1 > num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`;
  console.log(result);


let today = new Date();
let myDay = today.getDay();

switch (myDay){
    case 1:
      console.log("Start of the Week!");
      break;
    case 2:
      console.log("Hump day!");
      break;
    case 3:
      console.log("Rest day!");
      break;
    case 4:
      console.log("WORK WORK");
      break;
    default:
      console.log("Work Smarter my Dude");
      
}

function greet(){
  let greetMessage = `Hello,${myName}!`;
    console.log(greetMessage)
}
greet();

function multiply(a, b){
  let myResult = a * b;
    console.log(myResult);
      return myResult;
    
};

multiply(5, 5);
multiply(num1, num2);

function factorial(n){
  return n === 0 ? 1 : n * factorial(n -1);
}
console.log(factorial(5));

let fruits = ["apple", "banana", "cherry"];
fruits.push("date", "elderberry");
fruits.shift();

console.log(fruits.indexOf ("cherry"));

for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i])
}

for (let i = fruits.length - 1; i >= 0; i--){
  console.log(fruits[i]);
}

let myNumber = `${sum}`;
while (myNumber >= 1){
  console.log(myNumber);
  myNumber--;
}

let moreNumbers = [1, 2, 3, 4, 5];
let moreSum = 0;
for (let i = 0; i < moreNumbers.length; i++) {
  moreSum += moreNumbers[i];
} 
console.log(moreSum)

// Objects Lessons
let person = {
  firstName: "Danny",
  lastName: "Does It",
  newAge: 47,
  jobTitle: "Baby Web Developer"

};
person.fullName = function() {
  return `${this.firstName} ${this.lastName}`
};

console.log(person.fullName());

person.birthday = function() {
  this.newAge += 1;
}
person.birthday();
console.log(person.newAge);

// Doing the DOM

document.getElementById("header").textContent = "Hello, Love!");

let newDiv = document.createElement("div");
newDiv.textContent = "I'm new Here!";
document.body.appendChild(newDiv);

document.getElementById("clickMe").addEventListener("click", function() {
    alert("Button was clicked!");
});


/* DOM fix?
const btn = document.getElementById('colorChangeBtn');

// Add a click event listener to the button
btn.addEventListener('click', function() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    // Change the background color of the body to the random color
    document.body.style.backgroundColor = randomColor;
});
*/
