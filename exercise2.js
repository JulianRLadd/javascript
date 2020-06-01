//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for (let i = 0; i < 10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...

let i = 0;
while (i < 10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}


/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a 
//function expression. run all the functions after defining them, and print the answer to the console.

//your code...
const add = function (num1, num2) {
    return num1 + num2;
}
const power = function (num1, num2) {
    return Math.pow(num1, num2);
}
const multiply = function (num1, num2) {
    return num1 * num2;
}
const divide = function (num1, num2) {
    return num1 / num2;
}

console.log(divide(multiply(add(30, 2), 20), power(10, 2)))


/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() 
//the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
const zero = 20;
// null
// "0"
// !""
// {}
//() => {console.log("hello TEKcamp!");}
// 125
// undefined
// ""

console.log(`${20} is truthy because only null,NaN,0,"", and undefined are considered false`);
console.log(`${0} is falsy because null,NaN,0,-0,"", and undefined are considered false`);
console.log(`${"zero"} is truthy because it is a string, and therefore not null,NaN,0,-0,"", or undefined, which are considered false`);
console.log(`${zero} is truthy because it is a defined variable`);
console.log(`${null} is false because null,NaN,0,-0,"", and undefined are considered false`);
console.log(`${"0"} is truthy because it is a defined string`);
console.log(`${!""} is truthy because the boolean operator "!" means 'not', therefore this element is not false because "" is false`);
console.log(`${{}} is truthy because it is an object and only null,NaN,0,-0,"", and undefined are considered false`);
console.log(`${() => { console.log("hello TEKcamp!"); }} is truthy because it is a defined function`);
console.log(`${125} is truthy because it is a number that isn't zero`);
console.log(`${undefined} is falsy because null,NaN,0,-0,"",and undefined are considered false`);
console.log(`${""} is falsy because it is a string with a null value`);


/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if (day === "monday") {
    console.log("we got a long week ahead of us...");
} else if (day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}

switch (day) {
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tuesday":
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!")
        break;
    default:
        console.log("It's a weekend!")
}

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}

//Ternary or your code....
(age > 21) ? console.log("adult") : console.log("minor");

(age > 13 && age < 19) ? console.log("teen") : console.log("not a teenager");

(age > 65) ? console.log("retired") : console.log("still working...");



/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that 
//appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education
 
-add a method on your object, named learn. the learn method should print the value of the name 
property using the 'this' keyword.
 
-add another method on your object of any action you want to perform, using some property that 
exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
let julian = {
    name: "Julian",
    age: 30,
    gender: "MALE",
    hobbies: "Swimming, dancing, tennis, reading, movies",
    profession: "Full Stack Web Developer",
    education: "Simpson College, NorthLake College, Texas State Technical College, Coding Dojo",
    learn: function () {
        console.log(this.name)
    },
    brag: function () {
        console.log(this.hobbies)
    }
}

julian.learn


/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  
//Try to come up with a realistic set of properties and methods that would accurately describe that 
//object.  In at least one of your methods, use the this keyword to refer back to one of the 
//properties you defined on this object literal.  

//your code...

var celebrity = {
    name: "Jimmy Fallon",
    skills: "Making people laugh",
    height: "6 ft, 11 in",
    weight: 160,
    job: "Comedian",
    makeJoke: function () {
        console.log(`My job is a ${this.job}. But don't ask me to make you laugh!`)
    }
}

celebrity.makeJoke()

/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining 
//why you like that data type.

//your code...

let myArray = [23, 12, 22, 33]

function myFaves() {
    console.log("String: Galaxy")
    console.log("I like strings because of interpolation; it makes editing things with code much easier")
    console.log("Numbers: " + 45)
    console.log("I chose numbers because of math. Math is a universal language, much like love.")
    console.log("Array: " + myArray)
    console.log("And of course arrays! Without arrays, moving data would take all day long.")
}

myFaves()

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  
//This HOF should return another function fn(y) that takes another single parameter y.  
//This inner function should compute the product of it's parameter with the parameter 
//passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...
function multiple(num) {
    function fn(num) {
        return num * num
    }
    return fn(num)
}

console.log(multiple(3))

// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; 
//declare a variable called message that holds " is how much the stock has increased". 
// Return an inner function with years (yrs) as a parameter and declare a variable for 
//growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and 
//enter any amount for the cost basis and a number for the number of years.  Run the function 
//returned by the higher order function to display the future value of the stock.  

//your code...

function stockGain(basis,years){
    let message = " is how much the stock has increased";
    let presentBasis = basis;
    let growthRate = 0.05;
    function timeSpent(years){
        for(let i = 0; i<years;i++){
            basis+=(basis*growthRate);            
        }
        basis = Math.round((basis + Number.EPSILON) * 100) / 100
        let profit = Math.round((basis-presentBasis + Number.EPSILON) * 100) / 100
        console.log(`${profit}${message}`);
        console.log(`${basis} is the future value of this stock after ${years} years`);
        return basis;
    }
    return timeSpent(years);
}

var futureValue = stockGain(100,5)

console.log(futureValue)


