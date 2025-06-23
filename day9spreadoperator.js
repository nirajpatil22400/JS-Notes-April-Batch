/**
 * 1. Spread Operator
What it does:
The spread operator allows you to expand or spread elements of an array or object.

Use cases:

Copying arrays or objects

Merging arrays or objects

Passing elements as individual arguments to a function

Example use case:
Suppose you have two arrays. You can merge them into one:

First array: one, two

Second array: three, four
You can combine them as: one, two, three, four


 */
// 1. Spread Operator(...)
// Purpose:
// The spread operator is used to expand arrays or objects into individual elements.

// Use Case 1: Expanding Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const result = [...arr1, ...arr2];
console.log(result); // [1, 2, 3, 4, 5]

// Use Case 2: Copying Arrays

const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]

// Use Case 3: Expanding Objects

const dev = { name: "Niraj", age: 23 };
const updated = { ...dev, location: "Pune" };

console.log(updated);
// { name: "Niraj", age: 23, location: "Pune" }

// Use Case 4: Function Arguments

const numbers = [10, 20, 30];
function add(a, b, c) {
  return a + b + c;
}

console.log(add(...numbers)); // 60
