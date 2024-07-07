// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Prompt user for a positive integer
var userInput = prompt("Enter a positive integer:");

// Convert user input to a number
var number = parseInt(userInput);

// Check if the input is a valid positive integer
if (isNaN(number) || number <= 0) {
    document.write("<p>Invalid input. Please enter a positive integer.</p>");
} else {
    // Calculate round, floor, and ceil values
    var roundValue = Math.round(number);
    var floorValue = Math.floor(number);
    var ceilValue = Math.ceil(number);

    // Display the results in the browser
    document.write("a. Number: " + number +"</br>");
    document.write("b. Round off value: " + roundValue + "</br>");
    document.write("c. Floor value: " + floorValue + "</br>");
    document.write("d. Ceil value: " + ceilValue + "</br>");
}




// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var negativeFloat = prompt("Enter a negative floating point:");

// Convert user input to a number
var numberOne = parseFloat(negativeFloat);

// Check if the input is a valid positive integer
if (isNaN(numberOne) || numberOne>= 0) {
    document.write("<p>Invalid input. Please enter a negative floating point.</p>");
} else {
    // Calculate round, floor, and ceil values
    var roundValue = Math.round(numberOne);
    var floorValue = Math.floor(numberOne);
    var ceilValue = Math.ceil(numberOne);

    // Display the results in the browser
    document.write("a. Number: " + numberOne +"</br>");
    document.write("b. Round off value: " + roundValue + "</br>");
    document.write("c. Floor value: " + floorValue + "</br>");
    document.write("d. Ceil value: " + ceilValue + "</br>");
}




// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms



// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.