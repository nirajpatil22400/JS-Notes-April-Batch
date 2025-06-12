/*
Q1
What is an Array in JavaScript?
An array is a special variable that can hold multiple values in a single variable using index-based access.
*/
                                     
let fruits = ["apple", "banana", "cherry"];


/*
Each element in the array can be accessed by its index (starting from 0).
 */

/*
Q2
Why Do We Use Arrays?
Imagine storing 100 names without an array:
 */

let name1 = "Alice";
let name2 = "Bob";

// ... up to name100

//Arrays solve this problem by grouping data in a single structure.

//let names = ["Alice", "Bob", "Charlie", ..., "Zara"];

/*
Q3 
Where Are Arrays Used?
To store and manipulate lists of data (e.g., user names, product list)
*/

// To loop through data using for, map(), etc.

//Useful in APIs, forms, games, UI tables, and more

/*
Q4
If We Don’t Use Arrays?
Without arrays:
You'll need many separate variables
Data becomes hard to manage
Loops become useless
Operations like sorting, searching become tedious
/*

/*
Q5
Array Creation
*/
let arr1 = [10, 20, 30]; // Using square brackets (Recommended)
let arr2 = new Array(5, 10, 15); // Using constructor (Less common)

/*
Q6
Accessing Array Values
*/
let colors = ["red", "green", "blue"]; // l -> R 0 ....
console.log(colors[0]); // "red"
console.log(colors[2]); // "blue"

/*
Q7
Looping Through Arrays

for loop
*/

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]); //0 red // 1 green // 2 blue // 3 false
}


/* 
Q8
forEach()(only for arrays)
*/

colors.forEach((color, index) => {
  console.log(index + ": " + color);
});

/*
Q9
map()(transforms and returns a new array)
*/

let upperColors = colors.map(c => c.toUpperCase());
console.log(upperColors); // ["RED", "GREEN", "BLUE"]

/*
Q10
 Array Methods(Detailed)
 */

// push() – Add item to end

let nums = [1, 2, 3];
nums.push(4); // [1, 2, 3, 4]

// pop() – Remove item from end

nums.pop(); // [1, 2, 3]

// shift() – Remove from start

nums.shift(); // [2, 3]

// unshift() – Add to start

nums.unshift(0); // [0, 2, 3]

//splice(start, deleteCount, ...items) – Add or remove elements

let arr = [1, 2, 3, 4];
arr.splice(1, 2);      // Remove 2 elements from index 1 → [1, 4]
arr.splice(1, 0, 99);  // Insert 99 at index 1 → [1, 99, 4]

// slice(start, end) – Return portion(non - destructive)

let sliced = arr.slice(0, 2); // [1, 99]

// includes() – Check if item exists

let hasRed = colors.includes("red"); // true

// indexOf() – Get index of item

colors.indexOf("green"); // 1

// sort() – Sort array (as strings by default)

let numbers = [10, 2, 30];
numbers.sort(); // [10, 2, 30] → wrong (lexical sort)

numbers.sort((a, b) => a - b); // [2, 10, 30]

//reverse() – Reverse array in -place

numbers.reverse(); // [30, 10, 2]

// filter() – Return array based on condition

let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [10, 2]

// reduce() – Convert array into a single value

let total = numbers.reduce((acc, val) => acc + val, 0);
console.log(total); // 42

// Nested Arrays (2D or multidimensional)

let matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // 3

/*
**Advantages of Arrays**:-
Store multiple data in one variable
Indexed and iterable
Easy to use with loops
Built-in high-level methods (filter, reduce, etc.)
Useful for dynamic size lists

-----------------------------------------------------

**Disadvantages**:-
Fixed performance limitations for large data
Insert/delete in the middle is slower than Set or Map
Can't store key-value pairs directly (use objects or Map)

------------------------------------------------------

**Advanced Use-Cases**
Sorting users by name
Storing a list of products
Filtering items based on user input
Real-time data charts
Converting API JSON to UI elements using map()

-----------------------------------------------------

Why Are Arrays Important ?
Feature	            Benefit
Store          -  multiple	Simplifies handling of large data sets
Indexed access -  Fast lookups and modifications
Looping	       -  Efficient processing
Methods	       -  Clean, readable, and concise logic
*/

