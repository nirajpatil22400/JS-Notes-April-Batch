// What is an Arrow Function?
// Arrow Functions were introduced in ES6 and provide a shorter syntax for writing functions.
// Basic Syntax:

const functionName = (parameter1, parameter2,) => {
  // function body
};

// Example:

const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3)); // 8

// Key Differences Between Arrow Functions & Regular Functions
// Feature	Regular Function	Arrow Function
// Syntax	         Long (function keyword)	  Short and clean
// this keyword	     Has its own this	          Inherits this from parent
// Constructor	     Can be used as constructor	  Cannot be used as constructor
// arguments           object	Available	         Not available

// Examples & Use Cases
// 1. Without Parameters
const greet = () => {
  console.log("Hello Niraj!");
};
greet(); // Hello Niraj!

// 2. With One Parameter
// You can skip parentheses if there's only one parameter.
const square = x => {
  return x * x;
};

console.log(square(5)); // 25

// 3. Single Expression - Implicit Return
// If only one expression, you can remove {} and return.

const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20

// 4. Arrow Function in Array Methods
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// Why Arrow Functions Were Needed?
// They help in:
// Reducing code size
// Better readability
// Avoiding confusion with this keyword

// Big Difference: this Behavior
//  Regular Function

function Person() {
  this.age = 0;

  setInterval(function () {
    this.age++; //  Wrong! `this` doesn't refer to Person
    console.log(this.age);
  }, 1000);
}

// Arrow Function Fixes it:
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; //  Correct: Arrow function uses parent's `this`
    console.log(this.age);
  }, 1000);
}

//  What You Cannot Do with Arrow Functions?
// You cannot:
// Use them as constructors (new)
// Access the arguments object
// Use this in the traditional way

// Filtering adults
const people = [15, 18, 22, 13, 34];
const adults = people.filter(age => age >= 18);
console.log(adults); // [18, 22, 34]

//  When to Use Arrow Functions?
//  Use arrow functions when:
// You want a short function
// You don’t need this or arguments
// You're working inside array methods (map, filter, reduce)

// Avoid when:
// You need a constructor
// You need access to this as object-specific
// You need arguments object

