//Q1 Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// // codes:- A=65, Z=90, a=97, z=122).
var ch=prompt("Enter the letter")
if (ch >="A" && ch <= "Z"){
    alert(ch +"is an UpperCase character");
}else if (ch >= "a" && ch <= "z"){
alert(ch +" is an LowerCase character ");
}else alert(ch +" is not an alphabetic character ");

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
function integer(a,b) {

    if (a > 0 && b > 0 && a > b) {
      document.write("The larger number is " + a );
    } else if (a > 0 && b > 0 && a < b) {
      document.write("The larger number is " + b);
    } else if (a === b && a > 0 && b > 0) {
      document.write("Both numbers are equal!")
    } else {
        document.write("Please add an integer!");
  
    }
  }
  
  integer(-1,-1);


// Q3 Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number=prompt("Enter the number")
    if(number>=20){
        alert("The number is positive");
    } if(number>=10){
        alert("The number is negative");
    } if(number>=0){
        alert("The number is zero");
    }

    // 4. Write a program that takes a character (i.e. string of
    //     length 1) and returns true if it is a vowel, false otherwise

//     5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
