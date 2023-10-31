// Vars Dec
let myName = "Daniel";
let num1 = 10;
let num2 = 20;
// Boolean for later
let isLearning = false
    console.log("keep going");
// Computations
let sum = num1 + num2;
let difference = num2 - num1;   
let product = num1 * num2;
let nameAndSum = `${myName} ${sum}`;
// Logging
console.log("Differnce:", difference);
console.log("Product:", product);
console.log("Type of myName:", typeof myName);
console.log("Type of sum:", typeof sum);
console.log("My myName and Sum:", nameAndSum);
//this is what I found.

if (num1 > num2){
    console.log("num1 is greater");
}
    else{
        console.log("num2 is greater");
    }

let day = "Sunday"

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
        console.log("Work Smarter");
        break;
}
//changed this greet function
function greet(myName){
    console.log(`Hello, ${myName}!`);
}
// Changed this greet call
greet(myName);
// Changed this multiply function
function multiply(a, b){
   return a * b;
   
}
// Changed this call
console.log(multiply(num1, num2));

function factorial(n){
    if (n === 0){
        return 1;
    } else {
        return n * factorial(n -1);
    }
}
console.log(factorial(5));
// Totally got help from chatgpt on this factorial. 
// Now I'm going to Drop a commit and then I'm going to see how I could have done this better.Section.
// This commit is what I got for optimization.
// This line was my pause point to do the above review. 
// Time to code more. part 3. still on day 2

let fruits = ["apple", "banana", "cherry"];
fruits.push("date", "elderberry");
fruits.shift(0);
console.log(fruits[1]);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]); 
}


