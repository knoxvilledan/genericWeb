//reset the plan. day 4. 400-
//variables
let myName = "Daniel";
let num1 = 10;
let num2 = 20;
let isLearning = true;
let sum = num1 + num2;
let difference = num2 - num1;
let product = num1 * num2;

console.log("Hello, Loved ones this is", myName);
console.log(num1);
console.log(num2);
console.log("Keep Going, Keep Moving Forward!");
console.log("This is the Sum:", sum);
console.log("This is the Difference", difference);
console.log("Here is the product", product);
console.log(`Type of Data in var myName: ${typeof myName}`);
console.log(`Type of Data in var sum: ${typeof sum}`);
console.log("Test to add a 'string' and 'number':", myName + ' ' + sum);

if (num1 > num2){
    console.log("'num1' is greater");
    } else    { 
        console.log("'num2' is greater");
    }

let day = "Sunday";
switch (day){
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
function greet(){
    let greetMessage = (`Hello ${myName}!`);
    console.log(greetMessage);
}
greet()

// Optimized function
function multiply(a, b){
    return a * b;
}
console.log(multiply(num1, num2));


function factorial(n){
    if (n === 0){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
//part 2. 400-710 (3 hours). wifey pickup -.5 = 2.5 hours

let fruits = ["apple", "banana", "cherry"];
fruits.push("date", "elderberry");
fruits.shift();
    
console.log("Cherry is now in index:", fruits.indexOf("cherry"));

for (let i =  0; i < fruits.length; i++){
    console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i--){
    console.log(fruits[i]);
}
