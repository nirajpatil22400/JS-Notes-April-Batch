// 1. for loop
//  Use:
// Best when you need to work with indexes or control the loop execution.

// Syntax:
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Best for:
// When you need the index
// Skipping specific values (continue)
// Breaking out early(break)

//----------------------------------------------------

// 2. forEach() loop
// Use:
// Loop only over arrays (not objects), applying a function to each element.

// Syntax:
array.forEach((value, index) => {
  console.log(index, value);
});

// Limitations:
// You can’t break or continue
// Slightly slower for large data
// Only works on arrays

// -----------------------------------------------------

// 3. for...in loop
// Use:
// Loops through enumerable properties (keys) of an object.

// Syntax:

let person = { name: "Niraj", age: 24 };
for (let key in person) {
  console.log(key, person[key]);
}

// Best for:
// Looping keys of an object
// Don’t use with arrays:
// It may loop unwanted properties or indexes as strings.

// -----------------------------------------------------

// 4. for...of loop
// Use:
// Loops through iterable values like arrays, strings, sets, maps.

// Syntax:

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// Best for:
// Clean looping over array values
// Strings, Sets, Maps

//----------------------------------------------------------------
