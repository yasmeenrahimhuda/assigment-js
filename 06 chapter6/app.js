// q1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var num=10;

document.write("<h1>Result</h1>"+"<br>");
document.write("The value of a is: "+ num +"<br>"+"<br>");
document.write("The value of ++a is: "+ ++num +"<br>");
document.write("Now the value of a is: "+ num +"<br>"+"<br>");
document.write("The value of a++ is: "+num++ +"<br>");
document.write("Now the value of a is:"+ num +"<br>"+"<br>");
document.write("The value of --a is: "+--num +"<br>");
document.write("Now the value of a is:"+ num +"<br>"+"<br>");
document.write("The value of a-- is: "+num-- +"<br>");
document.write("Now the value of a is:"+ num +"<br>"+"<br>");

// Q2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a=2;
var b=1;
var result=--a - --b+ ++b+ b--;

document.write("<h1>Answer No 2</h1>" +"<br>");
document.write("a is: "+ a +"<br>");
document.write("b is: "+ b +"<br>");
document.write("result is: "+ result +"<br>");

// Q3. Write a program that takes input a name from user &
// greet the user.

var greet=prompt("Enter your name");
alert("Hello");

// q5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var table= 5*1;
var table2 = 5*2;
var table3 = 5*3;
var table4 = 5*4;
var table5 = 5*5;
var table6 = 5*6;
var table7 = 5*7;
var table8 = 5*8;
var table9 = 5*9;
var table10 = 5*10;

var num1=prompt("Enter the number");
var num2=prompt("","Table of 5");
document.write("<h1>Answer Number 5 </h1>"+"<br>");
document.write("Table of 5"+"<br>");
document.write("5x1= " + table + "<br>");
document.write("5x2= " + table2 + "<br>");
document.write("5x3= " + table3 + "<br>");
document.write("5x4= " + table4 + "<br>");
document.write("5x5= " + table5 + "<br>");
document.write("5x6= " + table6 + "<br>");
document.write("5x7= " + table7 + "<br>");
document.write("5x8= " + table8 + "<br>");
document.write("5x9= " + table9 + "<br>");
document.write("5x10= " + table10 + "<br>");


// Q6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)





