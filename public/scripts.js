// Variables and a Boolean for possible later use
let myName = "Daniel";
let age = 2023 - 1976;
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
let difference = num2 - num1;
let product = num1 * num2;
let isLearning = true;
    
// Logging messages (added these notes because of the optimization advice)
console.log("Keep Growing and going");
console.log(`Hello family, this is the new and improve ${myName}`);
console.log("My age is now:", age)
console.log("sum is", sum);
console.log("Difference is", difference);
console.log("Product is", product);
console.log(`Type of myName: ${typeof myName}`);
console.log(`Type of sum: ${typeof sum}`);
console.log(`${myName} ${sum}`);
console.log(num1 > num2 ? "num1 is greater": "num2 is greater");


let day = "Tuesday";

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

console.log(multiply(5, 5));

function greet(myName){
    console.log(`"Hello,", ${myName}`);
}

greet(myName);

function multiply(a, b){
    return a * b;
}

console.log(multiply(num1, num2));

function factorial(n){
    if (n === 0){
        return 1;
    } else {
        return n * factorial(n -1);
    }
}

console.log(factorial(5));
// pausing for optimization check 340-500

let fruits = ["apple", "banana", "cherry"];
fruits.push("date", "elderberry");
fruits.shift();

let index = fruits.indexOf("cherry");
console.log("Index of cherry:", index);

for (let i = 0; i < fruits.length; i++){
    let reverseIndex = fruits.length - 1 - i;
    console.log("Fruit at index", i, ":", fruits[i]);
    console.log("----");
    console.log("Fruit at reverse index", reverseIndex, ":", fruits[reverseIndex]);
    
}

let i = sum
while (i > 0){
    console.log(i--); 
}
/* Mostly figured this one out on my own. gonna try another way.
gonna commit so I can compare. Got it*/

let Numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
Numbers.shift();
Numbers.push(13);

let totals = 0;
for (let i = 0; i < Numbers.length; i++){
    totals += Numbers[i];
}
console.log("This is the sum", totals);
// Boy that was brutal.
