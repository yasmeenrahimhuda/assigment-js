// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

 var city =prompt("Enter your city name")
 if(city==="karachi"){
 alert("Welcome to the city of Lights");
 }

 
// 2 Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
 var gender=prompt("Enter male or female")
 if(gender==="male"){
 alert("Good Morning Sir");    
 }
if(gender==="female"){
 alert("Good Morning Ma'am");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Prompt the user to enter the color of the traffic signal

var roadSignal=prompt("Enter the color of the traffic signal \n red \n green \n yellow")
 if(roadSignal==="red"){
 alert("Must Stop");    
 }
 if(roadSignal==="green"){
    alert("Move now");    
    }
    if(roadSignal==="yellow"){
        alert("Ready to move");    
        }   

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
var remainingFuel=prompt("Enter the current fuel 1-10 ")
 if(remainingFuel>=5){
 alert("Please refill the fuel in your car");    
 }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
 }
if (true){
alert("True");
 }
if (false){
alert("False");
 }

if("car" < "cat"){
alert("car is smaller than cat");
}
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secret=prompt("Enter the secret number from 1-10")
 if(secret>=-10);{
 alert("Bingo! Correct answer");    
 }
if (secret>=+1);{
alert("Close enough to the correct number");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// 9. Write a program that checks whether the given input is an
// even number or an odd number.


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


var temperature=prompt("Enter the today temperature");
if(temperature===40){
alert("it is too hot outside")
}
if(temperature===30){
alert("The Weather today is Normal")
}
if(temperature===20){
    alert("Today’s Weather is cool")
    }
    if(temperature===10){
        alert("OMG Today's weather is so Cool")
        }
            

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// if(firstNumber=+);{
//     alert(1)
// }
// if(secondNumber=-);{
//     alert(4)
// }
// if(operation=+,-,*,/,%);{
// alert(6)
// }
