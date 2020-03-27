/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using a function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
    
    // Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2;
}

// Step 3: Using a function declaration, declare another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let result = add(addend1, addend2);

    // Step 4: Assign the return value to an HTML form element with an id of sum
    document.querySelector('#sum').value = result;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let minuend = parseInt(document.querySelector('#minuend').value);
    let subtrahend = parseInt(document.querySelector('#subtrahend').value);
    let result = subtract(minuend, subtrahend);
    document.querySelector('#difference').value = result;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);
    let result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


// Step 8: Using one of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let result = divide(dividend, divisor);
    document.querySelector('#quotient').value = result;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an id of year
document.querySelector('#year').textContent = currentYear;

