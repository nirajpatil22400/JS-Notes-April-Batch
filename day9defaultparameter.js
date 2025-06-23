/**
 * 3. Default Parameters
What it does:
Default parameters allow you to give a default value to a function parameter in case the caller does not provide a value.

Why it's useful:
It helps prevent undefined values and removes the need to manually check for missing arguments.

Example use case:
Define a function that takes a name. If no name is passed, use the default value "Guest".


 */
//  3. Default Parameters
//  Purpose:
// Default parameters allow functions to have fallback values if arguments are not provided.

// Basic Example

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet("Niraj"); // Hello, Niraj!

// Use with Multiple Parameters

function createUser(name = "Unknown", age = 18) {
  console.log(`${name} is ${age} years old.`);
}

createUser(); // Unknown is 18 years old.
createUser("Niraj"); // Niraj is 18 years old.
createUser("Niraj", 23); // Niraj is 23 years old.

// Spread Operator	...	Expand elements or properties
// Rest Operator	...	Collect remaining values
// Default Params	=	Provide fallback values in functions
