// What is a Callback Function?
// A callback is a function passed as an argument to another function.
// It is executed after a task is completed (used in asynchronous operations).

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Niraj", sayBye);

// setTimeout()
// Executes a function once after a delay (in milliseconds).
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

//  setInterval()
// Executes a function repeatedly after a given interval.
setInterval(() => {
  console.log("Repeats every 1 second");
}, 1000);

// What is a Promise?
// A Promise represents a value that may be:
// Resolved (success)
// Rejected (error)
// Pending
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});

// Handling with .then() and .catch()
myPromise
  .then((result) => {
    console.log(result); // "Task completed!"
  })
  .catch((error) => {
    console.log(error); // "Task failed!"
  })
  .finally(() => {
    console.log("Always runs");
  });

//   What is async and await?
// async makes a function return a Promise.
// await waits for the Promise to resolve before moving to the next line.

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}

async function load() {
  console.log("Loading...");
  const result = await fetchData();
  console.log(result); // "Data loaded"
}

load();

// fetch(url)
// fetch() is a built-in JavaScript function used to make HTTP requests to get data from servers (like APIs).

Syntax;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // use the data here
  })
  .catch((error) => {
    // handle any error
  });

// How it works:
// fetch(url) sends a request to the URL.
// It returns a Promise.
// You use .then() to handle the response.
// You must call .json() on the response to convert it into usable data.
// Use .catch() to handle any errors (like no internet, server down, etc.)

// Example: Fetching JSON Data

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // convert response to JSON
  .then((data) => console.log(data)) // use the JSON data
  .catch((error) => console.error("Error:", error)); // handle errors

//    Using async/await with fetch
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();


//  What is sessionStorage?
// sessionStorage is a type of Web Storage API that allows you to store key-value pairs in the browser, only for the current tab session.
// Data is available only while the tab is open.
// Once the tab or browser is closed, the data is cleared.

//  Syntax
// Operation	Syntax
// Store item	sessionStorage.setItem("key", "value")
// Get item	sessionStorage.getItem("key")
// Remove item	sessionStorage.removeItem("key")
// Clear all items	sessionStorage.clear()
// Get number of items	sessionStorage.length

//  Example 1: Storing and Retrieving Simple Data
// Store data
sessionStorage.setItem("name", "Niraj");

// Retrieve data
let username = sessionStorage.getItem("name");
console.log(username); // Niraj

//  Example 2: Removing and Clearing
sessionStorage.removeItem("name"); // Removes "name" key

sessionStorage.clear(); // Clears all session storage

// Example 3: Storing Objects (must use JSON)
const user = {
  name: "Niraj",
  age: 23,
};

// Convert object to string before storing
sessionStorage.setItem("user", JSON.stringify(user));

// Retrieve and convert back to object
const storedUser = JSON.parse(sessionStorage.getItem("user"));
console.log(storedUser.name); // Niraj

//  Difference Between localStorage and sessionStorage
// Feature                      	   localStorage	                              sessionStorage
// Lifetime	                    Until manually cleared	                      Until tab/browser is closed
// Scope	                      Shared across all tabs/windows	              Only for one tab
// Storage limit	                  ~5MB	                                              ~5MB

// What is a Closure?
// A closure is created when a function remembers and accesses variables from its outer function scope, even after the outer function has finished executing.

// In short:
// "Inner function remembers the variables of the outer function."
function outer() {
  let name = "Niraj";

  function inner() {
    console.log(name); // Accesses outer variable
  }

  return inner;
}

const greet = outer(); // outer() finishes, but inner() still remembers 'name'
greet(); // Output: Niraj

// Why is this a Closure?
// Because the inner() function "closes over" the name variable, keeping it alive even after outer() is done running.
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

/*
Use Case	
Data privacy	                               Keeps variables private inside a function
Function factories	                         Create customized functions with preset values
Event handlers	                             Maintain state for DOM events
Asynchronous callbacks	                     Capture data inside setTimeout, setInterval, etc.
 */

// What is call()?
// The call() method is used to call a function with a specific this value, and arguments passed one by one.

// Syntax:
// functionName.call(thisArg, arg1, arg2, ...);

// thisArg: the object to be used as this
// arg1, arg2...: arguments to be passed to the function

// Example:
const person = {
  name: "Niraj",
};

function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

greet.call(person, "Hello", "!");
// Output: Hello Niraj!

// What Happened?
// The greet function used person as this
// Hello and ! were passed as arguments

// Example:
const student = {
  name: "Niraj",
};

function printDetails(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

printDetails.call(student, "Pune", "India");
// Output: Niraj lives in Pune, India

// Why use call()?
// Borrow methods from other objects
// Set this manually
// Run a function on different objects without copying it

// What is apply()?
// The apply() method is used to call a function with a specific this value, and arguments passed as an array.

// Syntax
// functionName.apply(thisArg, [arg1, arg2, ...])

// thisArg: the object to be used as this
// [arg1, arg2, ...]: arguments as an array

//example 1
const person = {
  name: "Niraj",
};

function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

greet.apply(person, ["Hi", "!"]);
// Output: Hi Niraj!

// example2
const student = {
  name: "Niraj",
};

function showDetails(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

showDetails.apply(student, ["Pune", "India"]);
// Output: Niraj lives in Pune, India

// What is bind()?
// bind() creates a new function that has this set to the value you provide.

// Unlike call() and apply(), it does not execute the function immediately — instead, it returns a new function that you can call later.

// Syntax
// const newFunction = originalFunction.bind(thisArg, arg1, arg2, ...);

// thisArg: the object to bind as this
// arg1, arg2...: optional arguments you want to pre-fill

// Example
const person = {
  name: "Niraj",
};

function greet(greeting) {
  console.log(greeting + " " + this.name);
}

const greetNiraj = greet.bind(person);
greetNiraj("Hello"); // Output: Hello Niraj

// Why use bind()?
// To set this permanently for future use
// Useful in event handlers, setTimeout, or when passing functions

// Example with setTimeout
const user = {
  name: "Niraj",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

setTimeout(user.greet.bind(user), 1000); // Without bind, 'this' would be undefined

// Partial Application with bind()
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // pre-fill a = 2
console.log(double(5)); // Output: 10

// Method	                       Executes Immediately          	Pass Arguments	          Returns New Function
// call()	                           Yes	                      Individually	                 No
// apply()                         	 Yes	                        As array	                   No
// bind()	                           No	                   Individually or partial	          Yes
