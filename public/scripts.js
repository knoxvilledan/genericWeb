let myName = "Daniel";
let age = 2023 - 1976;
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
let difference = num2 - num1;
let product = num1 * num2;

let isLearning = true;
    console.log("Keep Growing and going");

console.log(`Hello family, this is the new and improve ${myName}`);
console.log("age is now:", age)
console.log("sum is", sum);
console.log("Difference is", difference);
console.log("Product is", product);

let typeOfmyName = typeof myName;
let typeOfsum = typeof sum;
let sumOfmyNamesum = myName + ' ' + sum;

console.log(typeof myName);
console.log(typeof sum);
console.log(sumOfmyNamesum);

if (num1 > num2){
    console.log("'num1' is greater");
}   else { 
        console.log("'num2' is greater");
}

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

function greet(myName){
    console.log(`"Hello," ${myName}!`);
}

function multiply(a, b){
    let answer = a * b;
    console.log(answer);
}

multiply(6 , 9);
multiply(num1, num2)
multiply(12, 12);

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
