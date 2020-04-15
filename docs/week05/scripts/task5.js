/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const today = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = today.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message1 = 'Hang in there!';
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message1 = 'Hang in there!';
} else {
    message1 = 'Woohoo!  It is the weekend!';
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
    case 0:
        message2 = 'Sunday';
        break;
    case 1:
        message2 = 'Monday';
        break;
    case 2:
        message2 = 'Tuesday';
        break;
    case 3:
        message2 = 'Wednesday';
        break;
    case 4:
        message2 = 'Thursday';
        break;
    case 5:
        message2 = 'Friday';
        break;
    case 6:
        message2 = 'Saturday';
        break;
}


/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = message1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = message2;

/* FETCH */

// Step 1: Using the built-in fetch method, call this relative URL: 'json/temples.json'
// fetch('json/temples.json');

// Step 2: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
// fetch('json/temples.json')
//    .then(result = result.json())

// Step 3: Add another .then() method to iterate over the result using an arrow function and a .foreach() method
// fetch('json/temples.json')
//    .then(response => response.json())
//    .then(temples => {
//        temples.foreach(
//            temple => {

//            }
//        );
//    });

// Step 4: For each temple, complete the following:
// - Create an HTML <article> element
// - Create an HTML <h3> element and add the temple's templeName property to it
// - Create an HTML <h4> element and add the temple's location property to it
// - Create an HTML <h4> element and add the temple's dedicated property to it
// - Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Append the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Append the <article> element to the HTML element with an ID of temples

fetch('json/temples.json')
    .then(response => response.json())
    .then(temples => {
        temples.forEach(
            temple => {
                let article = document.createElement('article');
                
                let templeName = document.createElement('h3');
                templeName.textContent = temple.templeName;

                let location = document.createElement('h4');
                location.textContent = temple.location;

                let dedicated = document.createElement('h4');
                dedicated.textContent = temple.dedicated;

                let img = document.createElement('img');
                img.setAttribute('src', temple.imageUrl);
                img.setAttribute('alt', temple.templeName);

                article.appendChild(templeName);
                article.appendChild(location);
                article.appendChild(dedicated);
                article.appendChild(img);

                document.querySelector('#temples').appendChild(article);
            }
        );
    });
