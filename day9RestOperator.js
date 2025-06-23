/**
 * Rest Operator
What it does:
The rest operator collects multiple values into a single array-like variable.

Use cases:

Handling a variable number of arguments in a function

Collecting the "rest" of elements during destructuring

Example use case:
If a function can receive any number of numbers, you can collect them into one array inside the function to loop through or process.
 */
//  2. Rest Operator (...)
//  Purpose:
// The rest operator collects remaining elements into an array or object.

// Use Case 1: Function Parameters

function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Use Case 2: Object Destructuring

const { name, ...rest } = {
  name: "Niraj",
  age: 23,
  city: "Pune",
};

console.log(name); // Niraj
console.log(rest); // { age: 23, city: "Pune" }

// Use Case 3: Array Destructuring

const [first, second, ...others] = [10, 20, 30, 40, 50];

console.log(first); // 10
console.log(second); // 20
console.log(others); // [30, 40, 50]

