/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

// Step 2: Declare another variable to hold the day of the week

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

// Step 4: Declare a variable to hold a message that will be displayed

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'


/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above


/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2


/* FETCH */

// Step 1: Using the built-in fetch method, call this relative URL: 'json/temples.json'

// Step 2: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )

// Step 3: Add another .then() method to iterate over the result using an arrow function and a .foreach() method

// Step 4: For each temple, complete the following:
// - Create an HTML <article> element
// - Create an HTML <h3> element and add the temple's templeName property to it
// - Create an HTML <h4> element and add the temple's location property to it
// - Create an HTML <h4> element and add the temple's dedicated property to it
// - Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Append the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Append the <article> element to the HTML element with an ID of temples
