//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, 
//the output should be true, otherwise it should return false. 

//your code...

function stringEmpTester(str) {
    if (typeof str === "string" && str == false) {
        return !str
    } else {
        return false
    }
}

console.log(stringEmpTester("gully"))
console.log(stringEmpTester(""))

/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that 
//the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 

//your code...

const hold = "Learning JavaScript is fun!"

function replaceLast(sentence, word) {

    result = sentence.split(" ")
    result[result.length - 1] = word + "!"

    return result.join(" ")
}

console.log(replaceLast(hold, "cool"))
/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the 
//squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 


//your code...

function squareArray() {
    halfTen = [1, 2, 3, 4, 5]
    return halfTen.map((item) => {
        return item * item
    })
}

console.log(squareArray())



/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5.
// Write a JavaScript program that returns an array of the numbers that are greater than 3. Use
// an arrow function and one of the built-in array methods.

//your code...


list = [1, 3, 5, 7, 9, 1, 3, 5]

function greaterThanThree(arr) {
    plusThree = []
    arr.map((item) => {
        item > 3 ? plusThree.push(item) : console.log();
    })
    return plusThree
}

console.log(greaterThanThree(list))



/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that
// returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...

list2 = [12, 76, 344, 54, 2,]

function sum(arr) {
    sumOfAll = 0
    arr.map((item) => {
        sumOfAll += item
    })
    return sumOfAll
}

console.log(sum(list2))
/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the
// complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  


//your code...

function strand(dna) {
    str = dna.split("")
    str.sort()
    for (let i = 0; i < 2; i++) {
        let temp = str[i];
        str[i] = str[i + 1];
        str[i + 1] = temp;
    }
    return str
}


console.log(strand("GCAT"))




/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.
//  Get rid of any non numerical values.  Convert the strings that are numbers to
// an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2, 23, 1, 2, 1, 1, 1, 2, 2.5, 20, 200, 2000, , { k: 1 }, 20000, 19999, 1878, 140, 23, 4,
    "sk", true, true, "true-dat", "nice", "one", "two", "three", "3", "tea", []];

function maxNumber(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            max < numbers[i] ? max = numbers[i] : console.log();
        } else if (typeof numbers[i] === "string") {
            switch (numbers[i]) {
                case "one":
                    numbers[i] = 1;
                    break;
                case "two":
                    numbers[i] = 2;
                    break;
                case "three":
                    numbers[i] = 3;
                    break;
                case "3":
                    numbers[i] = 3;
                    break;
                default:
                    numbers.splice(i, 1)
                    i--;
                    break;
            }
        } else {
            numbers.splice(i, 1);
            i--;
        }
    }
    console.log(max + " is the SO-CALLED MAX")
    return numbers
}


console.log(maxNumber(numbers))
// 7.b -Write a function that sorts the given numbers array.  Allow the function to
// sort the array in descending order

console.log(sortNums(maxNumber(numbers), true))

function sortNums(numbers, desc) {
    if (desc == false) {
        return numbers.sort((a, b) => a - b)
    } else {
        return numbers.sort((a, b) => b - a)
    }
};



/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is
// the example data type, and the value is the name of the data type.  An object data
// type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({ company: "TEKsystems" }, "object");
mapObj.set("Basketball", "string");
mapObj.set(223, "number");
mapObj.set(null, "null");
mapObj.set(true, "boolean");


console.log(mapObj.has({ company: "TEKsystems" }));

//The above console.log() statmeent returns false.  Write another console.log() statement
// explaining why this line of code prints false.  Refactor the code on line 106, so you
// can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...
console.log("Because the above statement is an object. When inserting this into the map, it converts the keys into strings, so [object Object] is also inserted and messes things up")

const company = { company: "TEKsystems" }
console.log(mapObj.has(company));

//loop through the mapObj and create a new array of only the data types, leaving out the
// example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']

values = []
for (let items of mapObj.values()) {
    console.log(items);
    values.push(items)
}

console.log(values)



/************************************************************* */
//Problem 11:

let ones = [1, 11, 111, 1111, 11111, 111111, 1111111, 11111111, 111111111, 1111111111];
//reverse the array, without modifying the ones array.
function reverseArrays(arr) {
    mirror = [];
    for (let i = arr.length - 1; i > -1; i--) {
        mirror.push(arr[i]);
    }
    return mirror;
}

console.log(reverseArrays(ones))

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that
// callback function.  It should return the output of the callback function.


function add(x, y) {
    return x + y;
}


function performer(cb) {
    return cb;
}
console.log(performer(add(3, 4)))

/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.
//  Be sure to write comments explaining what the feature is and why it is useful.


//Destructuring is an assignment method that makes
// extracting data from objects(or arrays) into variables much easier.

//Previous method:

const mountains = ['Carmel', 'Fuji', 'Kilimanjaro'];

const mountain1 = mountains[0];
const mountain2 = mountains[1];
const mountain3 = mountains[2];

//ES6 Destructuring:
const [mountain1, mountain2, mountain3] = mountains;

//Another example
const lizard = {
    name: "Rex",
    breed: "Green Anole",
    age: 7,
    color: "Green or Brown"
}

// You can get the values in a different manner with destructuring

const { name, breed, age, color } = lizard;
