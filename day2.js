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
