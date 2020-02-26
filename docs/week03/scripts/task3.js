/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Declare a function named sum that takes two arguments, number1 and number2
function sum(number1, number2) {
    
    // Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2;
}

// Step 3: Declare another function named sumNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the sum function
function sumNumbers() {
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let result = sum(addend1, addend2);

    // Step 4: Assign the return value to an HTML form element with an id of sum
    document.querySelector('#sum').value = result;
}

// Step 5: Note in the task3.html HTML file there is a reference to the sumNumbers function in the onclick attribute of the first button.

// Step 6: Repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend and difference
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let minuend = parseInt(document.querySelector('#minuend').value);
    let subtrahend = parseInt(document.querySelector('#subtrahend').value);
    let result = subtract(minuend, subtrahend);
    document.querySelector('#difference').value = result;
}

// Step 7: Repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2 and product
function multiply(number1, number2) {
    return number1 * number2;
}

function multiplyNumbers() {
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);
    let result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
}

// Step 8: Repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor and quotient
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let result = divide(dividend, divisor);
    document.querySelector('#quotient').value = result;
}

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an id of year
document.querySelector('#year').textContent = currentYear;

