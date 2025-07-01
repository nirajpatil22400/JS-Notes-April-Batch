// // Variables and data types
// /*
// what are variables?
// variables are containers used to store data
//  */
// let name = "Ganesh"; // data type string
// const age = 24; // data type number //int- 4bytes /float-decimal number 4bytes /double - 8 bytes /long 8bytes
// var country = "India"; // string

// // keyword             Scope            reassignable      hoisted
// // var                 function            yes              yes
// // let                   block              yes             no
// // const                 block               no             no

// var a = 5;
// let b = 25;
// console.log(a); //5
// console.log(b); //25
// a = 10; // reassign
// b = 50; // reassign

// b = a; // reassign // 10
// console.log(a); // 10
// console.log(b); //50

// const c = 20;
// //c = 25; //reassign // error: assigment to contact variable
// console.log(c);

// let firstName = "Mahesh"; // valid
// let _firstName = "Ramesh"; // valid
// let _firstName_ = "Ganesh"; // valid
// let _first_Name = "Harshal"; // valid
// let $midileName2456 = "Priya"; // valid
// // let @lastName = "Patel"; //not valid
// // let 133Name_ = "Rahul"//not valid

// // Javascript Data Types
// // primitive data types - simple and immutable values
// // type                     Desc.
// // String                 text
// // Number                 integers and floating points
// // Boolean                true/ false
// // Null                  intentional absenec of value
// // Undefined             variables declared but not assigned;
// // Symbol                unique and immutable value(for object properties)
// // Bigint                very large integers

// // string - a sequence of character , enclosed in single , double quotes or backticks(template string ES6).

// let fname = "Shubham";
// let lname = "Bhange";
// let sentence = `Hello, ${fname} ${lname}`; //template literal(ES6).
// console.log(sentence); // Hello, Shubham Bhange

// // String Methods:
// console.log(fname.length); // 7
// console.log(lname.toUpperCase()); //BHANGE
// console.log(sentence.includes("Hello")); //true

// //Number : include integers ,decimal,special values like(nan-not a number ,infinity ,-infinity)

// let Age = 24; // number // integer
// let pi = 3.14; //number //float
// let inavlid = "abc" / 2; //number //nan

// console.log(typeof Age);
// console.log(typeof pi);
// console.log(typeof invalid);
// console.log(typeof fname);
// console.log(typeof lname);
// console.log(typeof sentence);

/*-------- DAY 3 -------    */
// control flow in javascript
//it tells the program "what to do next " whichi line to excecute , based on conditions

//if , els if , else
//it used for decisions
// like : if i'm hungry - eat food else if i'm thirsty - drink water else - relax

/*
syntax

if(condtion){
//execute if condition is true
}else if (anotherConition){
//execute if condition is true
}else{
// excecute if non of the above condition are true
}
 */

//Example 1

let age = 20;
if (age < 13) {
  console.log("You are a child");
} else if (age < 20) {
  console.log("You are teenager");
} else {
  console.log("You are an adult");
}

// example 2

let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in");
}

//switch statement - when u need to compare one variable against many fixed values
// like a menu if 1 ->start game if 2-> show help  if 3 -> exit
/*
switch (expression){
case value 1 :
    //code
    break;
case value 2:
    //code
    break;

default :
//code if no match
}
 */

//Example

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break; // it stops checking further
  case 2:
    console.log("Tuesday");
    break; // it stops checking further
  case 3:
    console.log("Wednesday");
    break; // it stops checking further
  default: // runs if no case matches
    console.log("Unknown day");
  // without break, it falls through to the next case;
}

/*
loops are used to repeat a block of code
for loop - when u known how may times to run
while loop - used when repeat while a condition is true
do while loop - when same as while , but runs atleast once
 */
//while loop
// syntax:
// while (condition){
// code block to repeat
// }

/*
-> if condtion is true -> runs the loop
-> if contion is false -> stops
 */

//example
let i = 1; //start
// checking condtion/expression
while (i < 5) {
  console.log("Number: " + i); // 1 2 3 4 5
  i++; //increment 1->2->3->4->5->6
}

//example
//print even number 1 - 10
//answer
let num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

/**
 * condtion is checked first , so it may never run if false
 * must update the loop variable (i++) to avoid infinite loops
 */

//for loop
/**
 for(start position,expression/cond,increment++){
 block of code
 }

 // print 1 - 10
 */
                 //4<=10
for (let j = 1; j <= 10; j++) {
  if (j % 2 === 0) {
    console.log(j); // 2 4 6 8 10
  }
}

//print 10 - 1
for (let j = 10; j >= 1; j--) {
  console.log(j); // 10 9 8 7 6 5 4 3 2 1
}

// do.. while loop
/**
do {
//code block runs once , then check
} while(condition)
*/

let z = 1;

do {
  console.log("z is :" + z);
  z++;
} while (z < 0);


/*
 For Loop (20)
Print numbers from 1 to 10 using a for loop.

Print even numbers from 1 to 20.

Print odd numbers from 1 to 20.

Print numbers in reverse from 10 to 1.

Print the multiplication table of 5.

Find the sum of numbers from 1 to 100.

Print square of numbers from 1 to 10.

Count how many numbers between 1–50 are divisible by 3.

Print all characters in the string "JavaScript" using a loop.

Print first 10 natural numbers.

Find the factorial of a number using a for loop.

Print every second number (step of 2) from 1 to 20.

Loop through an array and print each element.

Print the index and value of each element in an array.

Print numbers from 1 to 10, but skip number 5.

Break the loop if the number equals 7.

Check if a number is prime (use loop).

Reverse a string using a for loop.

Print only the vowels from a string.

Convert a string to uppercase using a loop.

While Loop (10)
Print numbers from 1 to 10 using a while loop.

Print numbers in reverse from 10 to 1.

Sum numbers from 1 to 100 using while.

Print the multiplication table of 3 using while.

Print the characters of a string using while.

Find how many digits a number has.

Count down from 20 to 0, step of 2.

Find the smallest number divisible by 7 greater than 30.

Add numbers entered by user until they type 0.

Find the sum of even numbers from 1 to 50.

Do While Loop (10)
Print numbers from 1 to 10 using do...while.

Run a loop at least once even if condition is false.

Add numbers until the total is greater than 100.

Read a number and keep printing square until user inputs negative number.

Print lowercase alphabet using ASCII codes.

Show the menu repeatedly until user presses "Exit".

Print Fibonacci series first 10 terms.

Reverse digits of a number using loop.

Print a star pattern of 5 rows.

Take user input until they type "stop".

Medium Level Tasks (40)
For Loop (20)
Find all numbers between 1–100 that are divisible by both 3 and 5.

Find the largest number in an array.

Count the number of vowels and consonants in a string.

Count frequency of each character in a string.

Remove all spaces from a string.

Count how many even numbers are in an array.

Calculate power of a number (x^n) using loop.

Print pattern:
1
12
123
1234
Print pyramid pattern of stars.

Find GCD (HCF) of two numbers using loop.

Find LCM of two numbers using loop.

Count total digits in a number.

Separate digits of a number and print them.

Check if a string is a palindrome using loop.

Find the second largest number in an array.

Loop through an array and double each value.

Merge two arrays using loop.

Print first 10 prime numbers.

Find sum of all numbers in an array using loop.

Create a new array with squares of elements using a loop.

While / Do While Loop (20)
Generate random numbers until you get a number > 90.

Calculate factorial using while loop.

Find average of N numbers entered by the user.

Count digits of a number using while.

Extract each character from a string using while.

Find the sum of digits of a number.

Keep taking input until user enters a number divisible by 5.

Keep printing "Loading..." until the value reaches 100.

Take input until the total reaches or exceeds 500.

Display a countdown timer from 10 to 0.

Show a menu repeatedly until user types "exit".

Reverse a number using while.

Keep checking if a number is even or odd until user enters "stop".

Accept 5 values and store in an array using loop.

Simulate login: keep asking for password until correct.

Loop to show math questions until 3 wrong answers.

Do-while loop to ensure at least 1 number is entered.

Convert a decimal number to binary using loop.

Convert a binary string to decimal using loop.

Take numbers from user and find max and min.

Hard Level Tasks (20)
Build a multiplication table (1–10) using nested loops.

Check if a number is Armstrong using loop.

Find the number of words in a sentence.

Detect and remove duplicate elements in an array.

Print Floyd’s Triangle.

Print Pascal’s Triangle using loop logic.

Rotate elements in an array by 1 using loop.

Reverse an array without using .reverse().

Generate prime numbers between two user-given limits.

Create a number pyramid pattern using loop:
    1
   2 2
  3 3 3
Write a loop that encrypts a message (Caesar cipher).

Simulate calculator using switch and loop (menu-driven).

Store 5 student scores, then print who passed and failed.

Write a game that gives 3 tries to guess a number.

Convert temperature from Celsius to Fahrenheit in loop.

Loop through object properties and print key-value pairs.

Create a loop-based menu system (Add, View, Delete).

Loop through nested arrays and flatten them.

Generate all combinations of a 3-digit number using loop.

Print diamond pattern using stars.


 */