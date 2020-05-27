//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. 
//Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

function fahrenheitToCelsius(degree) {
    var celsius = (degree - 32) * 5 / 9;
    console.log(celsius);
}

fahrenheitToCelsius(32);

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...

function celsiusToFahrenheit(degree) {
    var fahrenheit = (degree * 9 / 5) + 32;
    console.log(fahrenheit);
}

celsiusToFahrenheit(100);


// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a 
//variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...

function ageCheck(age) {
    age <= 18 ? console.log("yes") : console.log("no");
}

ageCheck(12);

/************************************************************ */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing 
//wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate 
//the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...
var testString = "The five boxing wizards jump quickly."

function stringToArray(testString) {
    var test = testString.split(" ");
    console.log(test);
    var test2 = test.join(" ");
    console.log(test2);
}

stringToArray(testString);




/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from 
//the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an 
//array in place.

//your code...

function numReverse(phoneNum) {
    var reversedNum = phoneNum.toString().split("").reverse().join("");
    console.log(reversedNum);
}

numReverse(1234567890);


/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. 
//Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...

function car(year, color, make, model) {
    this.year = year;
    this.color = color;
    this.make = make;
    this.model = model;
}

var juliansCar = new car(1990, "Green", "Ford", "Mustang");

function getCarInfo(targetCar) {
    console.log(targetCar.year)
    console.log(targetCar.color)
    console.log(targetCar.make)
    console.log(targetCar.model)
};



/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, 
//the for loop will check if the current number is odd or even and display the output.

//your code...

function checkOdds() {
    for (var i = 1; i <= 15; i++) {
        i % 2 == 0 ? console.log("Even " + i) : console.log("Odd " + i);
    }
}

checkOdds();

/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. 
//For multiples of 3 print "TEK" instead of the number and for multiples of 5, 
//print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...

function threeFiveTekCamp() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("TEKcamp")
        } else if (i % 3 == 0) {
            console.log("TEK")
        }
        else if (i % 5 == 0) {
            console.log("camp")
        }
        else {
            console.log(i)
        }
    }
}

threeFiveTekCamp()

/************************************************************* */
// Problem 8:
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...
for(var i=0;i<nums.length;i++){
    if(i==0||i%3==0){
        console.log(i);
    }
}


// Problem 9:
const foodArray = ['potatoes', 'tamales', 'lemon', 'strawberries', 'chocolate', 'pudding', { school: 'TEKcamp' }];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
var school = foodArray[6];
console.log(school)

const adjectiveArray = ['salty', 'spicy', 'sour', 'sweet', 'rich', 'creamy', 'amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular 
//or plural.  "Potatoes are salty", "Lemon is sour".

for(var i=0;i<foodArray.length;i++){
    switch (foodArray[i].charAt(foodArray[i].length-1)){
        case "s":
            var inBetween = "are"
        default:
            var inBetween = "is"
    }

    var string = foodArray[i]+" "+ inBetween +" "+adjectiveArray[i]
    console.log(string)
}


/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  
//put them in an array, and create a doMath() function that randomly does one of the 4 operations
// whenever it is run.  the doMath() function should print out what mathetmatical function was
// carried out.  The doMath() function should return the computed value of any operation performed.
var add = function(num1,num2){
    return num1+num2;
}
var subtract = function(num1,num2){
    return num1-num2;
}
var multiply = function(num1,num2){
    return num1*num2;
}
var divide = function(num1,num2){
    return num1/num2;
}
const operations = [add,subtract,multiply,divide];
function doMath(x,y) {
    var rand = Math.floor(Math.random() * 4);
    switch (rand){
        case 0:
            console.log("Addition "+
            add(x,y));
            break;
        case 1:
            console.log("Subtraction "+
            subtract(x,y));
            break;
        case 2:
            console.log("Multiplication "+
            multiply(x,y));
            break;
        case 3:
            console.log("Division "+
            divide(x,y));
            break;
    }
}

doMath(4,3)