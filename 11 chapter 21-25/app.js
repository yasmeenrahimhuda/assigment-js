// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName =prompt("enter your first name");
var lastName=prompt("enter your last name");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + " Welcome");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user input in broswer
// var mobilephone =prompt("Enter your favorite mobile phone model");
// var mobilephone1 =["Samsung Galaxy S6 Edge plus, Nokia, Anroid, Apple, "];
// var length=mobilephone;  
// document.write(length);
// function displayLength() {
//     // Get the value of the input field
//     var phoneModel = document.getElementById("phoneModelInput").value;

//     // Calculate the length of the input string
//     var length = phoneModel.length;

//     // Display the length in the paragraph
//     document.getElementById("lengthDisplay").innerHTML = "Length of your input: " + length;
// }
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

var find="Pakistani";
var index=find.indexOf("n");
document.write(index); 
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
var letter="Hello World";
var indexing=letter.lastIndexOf("l");
document.write(indexing); 

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
var word="Pakistani";
var character=word.charAt("3");
document.write(character); 

// 6. Repeat Q1 using string concat() method.

// var firstName =prompt("enter your first name");
// var lastName=prompt("enter your last name");
// var fullName = firstName + " " + lastName;

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var text="Hyderabad";
var replaceText=text.replace("Hyderabad","Islamabad");
document.write(replaceText);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
var message="Ali and Sami are best friends. They play cricket and football together.";
var replaceAll=message.replaceAll("and","&")
document.write(replaceAll);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
var num="472";
var convert=num.toString((472))
document.write(convert);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var userInput =prompt("Enter Some Text");
var capitalLetter = userInput.toUpperCase();
document.write("Input in uppercase:", capitalLetter);


// 11. Write a program that takes user input. Convert and
// show the input in title case.
function toTitleCase(sentence) {
var words = sentence.toLowerCase().split(' ');

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }   
     // Join the words back into a sentence
     return words.join(' ');
    }
    
// Prompt the user to enter some text
 var input = prompt("Enter some text:");

// Convert the input to title case
var titleCaseInput = toTitleCase(input);

document.write("Input in titlecase:", titleCaseInput);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;

var number=35.36;
var removeDot = number.toString().replace(".","");
document.write("Number as string without dot", removeDot);

// Remove the dot to display “3536” display in your browser.


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

//     14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:



// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// 17. Write a program to display the last character of a user
// input.


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.