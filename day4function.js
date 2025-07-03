//syntax
// function funtionName(parameters){ //code to excute or statement }
// 1. Function Declaration - named function
// A function declared with the function keyword.

greet("Yash");
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Niraj")); // Hello, Niraj
// Can be hoisted (called before it is declared).

//  2. Function Expression - stored in variable
// A function stored in a variable. It is not hoisted.

const greet = function(name) {
  return "Hi, " + name;
};

console.log(greet("Niraj")); // Hi, Niraj


// 3. Arrow Functions
// A shorter syntax for writing function expressions. Introduced in ES6.
const add = (a, b) => {
  return a + b; // 5 + 3
};
console.log(add(5, 3)); // 8

// Shorter if only one line
const square = x => x * x; // 4 * 4
console.log(square(4)); // 16
// Note: Arrow functions do not have their own this, which makes them useful in callbacks or inside classes.

// 4. Parameters vs Arguments
// Parameters are variables listed in function definition.
// Arguments are actual values passed when calling the function.
function greet(name) {  // 'name' is a parameter
  console.log("Hi " + name);
}
greet("Niraj");  // 'Niraj' is an argument

// 5. Return Values
//Functions can return a value using the return keyword.
function multiply(a, b) {
  return a * b;
}
const result = multiply(4, 5);
console.log(result); // 20

// 6. IIFE (Immediately Invoked Function Expression)
//An IIFE is a function that runs immediately after it is defined.
// Syntax:
(function() {
  console.log("IIFE executed!");
})();
//Example with Parameters:
(function(name) {
  console.log("Welcome, " + name);
})("Niraj");

//Why use IIFE?
// To avoid polluting the global scope.
// Create private variables or scope.
// Useful in modular code or one-time initialization.

// Example with private variable:

const counter = (function() {
  let count = 0;
    return function () {
    count++;
    console.log("Count: " + count);
  };
})();

counter(); // Count: 1
counter(); // Count:



