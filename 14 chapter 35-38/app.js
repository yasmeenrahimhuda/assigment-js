// 1. Write a program that displays current date and time in
// your browser.

 var rightNow = new Date();
 var theDay = rightNow.getDay();
 document.write(theDay)







// 2. Write a program that alerts the current month in words.
// For example December.
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

// DATE METHODS | JAVASCRIPT

// Page 5 of 5

// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge






// // 1. Write a program that takes a positive integer from user &
// // display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// // Prompt user for a positive integer
// var userInput = prompt("Enter a positive integer:");

// // Convert user input to a number
// var number = parseInt(userInput);

// // Check if the input is a valid positive integer
// if (isNaN(number) || number <= 0) {
//     document.write("<p>Invalid input. Please enter a positive integer.</p>");
// } else {
//     // Calculate round, floor, and ceil values
//     var roundValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);

//     // Display the results in the browser
//     document.write("a. Number: " + number +"</br>");
//     document.write("b. Round off value: " + roundValue + "</br>");
//     document.write("c. Floor value: " + floorValue + "</br>");
//     document.write("d. Ceil value: " + ceilValue + "</br>");
// }




// // 2. Write a program that takes a negative floating point
// // number from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number


// var negativeFloat = prompt("Enter a negative floating point:");

// // Convert user input to a number
// var numberOne = parseFloat(negativeFloat);

// // Check if the input is a valid positive integer
// if (isNaN(numberOne) || numberOne>= 0) {
//     document.write("<p>Invalid input. Please enter a negative floating point.</p>");
// } else {
//     // Calculate round, floor, and ceil values
//     var roundValue = Math.round(numberOne);
//     var floorValue = Math.floor(numberOne);
//     var ceilValue = Math.ceil(numberOne);

//     // Display the results in the browser
//     document.write("a. Number: " + numberOne +"</br>");
//     document.write("b. Round off value: " + roundValue + "</br>");
//     document.write("c. Floor value: " + floorValue + "</br>");
//     document.write("d. Ceil value: " + ceilValue + "</br>");
// }




// // 3. Write a program that displays the absolute value of a
// // number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// // 4. Write a program that simulates a dice using random()
// // method of JS Math class. Display the value of dice in your
// // browser.
// // 5. Write a program that simulates a coin toss using random()
// // method of JS Math class. Display the value of coin in your
// // browser

// // 6. Write a program that shows a random number between 1
// // and 100 in your browser.

// // 7. Write a program that asks the user about his weight. Parse
// // the user input and display his weight in your browser.
// // Possible user inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms



// // 8. Write a program that stores a random secret number from
// // 1 to 10 in a variable. Ask the user to input a number
// // between 1 and 10. If the user input equals the secret
// // number, congratulate the user.