// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var emptyArray = [[], [], []];  // Example: 3 empty subarrays

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

// 3. Write a program to print numeric counting from 1 to 10.

function printCounting() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Call the function to print the numbers
printCounting();


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

function printFruits(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// Call the function to print the fruits
printFruits(fruits);



// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
var a=["cake","apple pie","cookie","chips","patties"]
console.log(a)


// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:



// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
function findlargestNumber(array) {
    if (array.length === 0) {
        return null; // Handle case for empty array
    }

    var largest = array[0];
    
    for (var i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    
    return largest;
}

// Given array
var A = [24, 53, 78, 91, 12];

// Find the smallest number in the array
var largestNumber = findlargestNumber(A);

if (largestNumber !== null) {
    console.log("The smallest number in the array is:", largestNumber);
} else {
    console.log("The array is empty.");
}
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

function findSmallestNumber(array) {
    if (array.length === 0) {
        return null; // Handle case for empty array
    }

    var smallest = array[0];
    
    for (var i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    
    return smallest;
}

// Given array
var A = [24, 53, 78, 91, 12];

// Find the smallest number in the array
var smallestNumber = findSmallestNumber(A);

if (smallestNumber !== null) {
    console.log("The smallest number in the array is:", smallestNumber);
} else {
    console.log("The array is empty.");
}

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.