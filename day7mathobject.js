// 9. JavaScript Math Object
// The Math object provides mathematical constants and functions. It is not a constructor, so we don’t use new Math().

// 1. Rounding Functions
// Math.round()
// Rounds a number to the nearest integer.

console.log(Math.round(4.3)); // 4
console.log(Math.round(4.5)); // 5

//If the decimal is .5 or above, it rounds up, otherwise down.

// Math.floor()
// Rounds a number down to the nearest integer.

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.3)); // -5

// Math.ceil()
// Rounds a number up to the nearest integer.

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.7)); // -4

// 2. Random Numbers
// Math.random()
// Generates a random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random()); // 0.234567 (example)

// Generate Random Integer in Range
// Random integer between min and max (inclusive)
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 100)); // Between 1 and 100


// 3. Min and Max
// Math.min()
// Returns the smallest number among arguments.

console.log(Math.min(10, 5, 20)); // 5

// Math.max()
// Returns the largest number among arguments.

console.log(Math.max(10, 5, 20)); // 20

// 4. Math Power & Square Root
// Math.pow(base, exponent)
// Returns base to the power of exponent.

console.log(Math.pow(2, 3)); // 8

// Math.sqrt()
// Returns the square root.

console.log(Math.sqrt(25)); // 5

// Other Useful Math Methods
// Method	Description
// Math.abs(x)	    Absolute (positive) value
// Math.trunc(x)	Removes decimal part
// Math.sign(x)	    Returns -1, 0, or 1
// Math.E	        Euler’s number (~2.718)
// Math.PI	        3.14159265359
// Math.log(x)	    Natural logarithm

// Real Life Use-Cases
// Situation	                           Use of Math
// Dice game	                           Math.random()
// Pagination, indexes	                   Math.ceil()
// E-commerce rounding total price	       Math.round()
// Drawing on canvas	                   Math.PI, Math.sin()
// Generating OTPs	                       Math.floor(Math.random())


// Basic
// Round 4.67 using all three methods (round, floor, ceil).
// Generate a random number between 1 and 10.

// Medium
// Create a function that returns the minimum and maximum from an array using Math.min.apply.
// Write a function to calculate power of a number using Math.pow().

// Hard
// Create a game to roll two dice and display total score (random 1–6 + 1–6).
// Write a program to generate a 6-digit random OTP using Math.random.

