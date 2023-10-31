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

// Types & Concatenations trying to learn how to properly organize my code.
let typeOfmyName = typeof myName;
let typeOfsum = typeof sum;
let sumOfmyNamesum = myName + ' ' + sum;

console.log(typeof myName);
console.log(typeof sum);
console.log(sumOfmyNamesum);
console.log(num1 > num2 ? "num1 is greater": "num2 is greater");
// Got this one, way better option here.

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
// How do I use this info? A call? like below in greet?
console.log(multiply(5, 5));
// So when a function is created you can use that code earlier in the block? It's like prior to the function?
function greet(myName){
    console.log(`"Hello,", ${myName}`);
}

greet(myName);
// Was given this one. Cleaner, but Seems like the same amount of coating so I don't quite get the point of optimizing it but maybe it's for bigger use or larger capacity if I do it the way I'm about to change this to?
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
// I know this is an important thing, but I haven't had the occasion to use it in a real world scenario. 
console.log(factorial(5));
// pausing for optimization check
