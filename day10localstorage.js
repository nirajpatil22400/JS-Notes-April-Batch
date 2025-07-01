//  1. What is JSON?
// JSON is a lightweight data format for storing and transporting data.
// It uses key-value pairs and is similar to JavaScript objects but stored as a string.

// JSON Example
// {
//   "name": "Niraj",
//   "age": 23,
//   "skills": ["JavaScript", "React"]
// }

// 2. JSON.stringify()
//  Purpose:
// Convert a JavaScript object or array into a JSON string.

// Example: Object to JSON String

const user = { name: "Niraj", age: 23, skills: ["JavaScript", "React"] };

const jsonString = JSON.stringify(user);
console.log(jsonString);
// Output: '{"name":"Niraj","age":23,"skills":["JavaScript","React"]}'

/*
A JavaScript object named user is created.
It contains three key-value pairs:

name is Niraj

age is twenty three

skills is a list containing JavaScript and React

The method JSON stringify is used to convert the object into a JSON-formatted string.
This string can now be stored, sent to a server, or used in APIs.

The result is saved in a variable named jsonString.

The content of jsonString is printed using console log.

Output Explanation
The printed string looks like a JSON object with double quotes around all keys and string values:
name is Niraj
age is twenty three
skills is a list containing JavaScript and React

The entire structure is now a string version of the original object.

Why Is This Useful
JSON strings are easy to store in local storage or databases

They can be sent between a server and client using APIs

Helps in converting objects into a transportable format

******************************************************************************************
 */

// Example: Array to JSON String

const skills = ["JavaScript", "React", "Node.js"];
const jsonArray = JSON.stringify(skills);

console.log(jsonArray);
// Output: '["JavaScript","React","Node.js"]'

/*
A JavaScript array named skills is created.
It contains three string values:

JavaScript

React

Node dot js

The method JSON stringify is used to convert the array into a JSON string format.
This method transforms the array into a single string that follows JSON rules.

The result is stored in a variable called jsonArray.

The content of jsonArray is printed using console log.

Output Explanation
The output will be a string that looks like this:
Open square bracket double quote JavaScript double quote comma double quote React double quote comma double quote Node dot js double quote close square bracket

This is the JSON representation of your array, now stored as a string.

Why This Is Useful
JSON strings are easy to store or send across networks

You can save this array in local storage or a file

It helps in sharing data between applications or with servers

***************************************************************************************
 */

// Use Case in localStorage

localStorage.setItem("user", JSON.stringify(user));

/**
 *A JavaScript object named user is assumed to be already defined.
For example, it might contain keys like name, age, and skills.

The method JSON stringify is used to convert the user object into a string format.
This is required because local storage can only store data as strings.

The method local storage set item is used to save the data.

The first input is the key, which is the word user

The second input is the string version of the user object

This stores the user information in the browser's local storage under the key named user.

Why This Is Useful
Saves data permanently in the browser, even after the page is closed or refreshed

Helps you keep user information like login details or preferences

Can be used to build features like remember me, theme selection, and saved form data

**************************************************************************************************
 */

// 3. JSON.parse()
// Purpose:
// Convert a JSON string back into a JavaScript object or array.

// Example: JSON String to Object

const jsonString1 = '{"name":"Niraj","age":23,"skills":["JavaScript","React"]}';
const user1 = JSON.parse(jsonString1);

console.log(user1.name); // Niraj
console.log(user1.skills[0]); // JavaScript

/*
A variable named jsonString is created.
It contains a text version of a JSON object.
This string includes three properties:

name with value Niraj

age with value twenty three

skills which is a list containing JavaScript and React

The method JSON parse is used to convert this string back into a real JavaScript object.
The result is saved in a variable called user.

Once converted, you can access the properties just like any normal object:

user dot name gives the value Niraj

user dot skills at position zero gives JavaScript

These values are printed using console log.

Expected Output
Niraj
JavaScript

Why This Is Useful
Converts data from a string format into usable objects in JavaScript

Useful when you receive JSON data from APIs, files, or local storage

Lets you easily work with the data using standard object and array methods

***************************************************************************************
 */

// Example: JSON String to Array

const jsonArray1 = '["JavaScript","React","Node.js"]';
const skills1 = JSON.parse(jsonArray1);

console.log(skills1); // ["JavaScript", "React", "Node.js"]

/*
A variable named jsonArray is created.
It contains a text version of a JSON array.
The array holds three items:

JavaScript

React

Node dot js

The method JSON parse is used to convert the string into a real JavaScript array.
The result is stored in a variable named skills.

Now, skills becomes a normal JavaScript array.
You can access each item using index positions or use array methods like push, pop, and for each.

When printed using console log, it shows the full array with all three values.

Expected Output
JavaScript
React
Node dot js

(as an array)

Why This Is Useful
It helps you take stored or received JSON data and use it as an actual array in JavaScript

Commonly used when reading arrays from local storage or receiving data from an API

Allows easy access and manipulation of list items

***********************************************************************************
 */

// Use Case in localStorage

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Niraj

/*
The method local storage get item is used to fetch data stored under the key called user.

Since data in local storage is always stored as a string, the method JSON parse is used to convert that string back into a usable JavaScript object.

The result is stored in a variable named stored user.

After that, the code prints the value of the name property from the stored user object.
 */

// Common Use Cases
// Storing Objects in localStorage/sessionStorage
// Convert an object to JSON using JSON.stringify() before storing.
// Retrieve and parse it back into an object using JSON.parse().
// Parsing API Responses
// Most APIs return data in JSON format. Use JSON.parse() to convert it into a usable JavaScript object.
// Sending Data in APIs
// Before sending data to a server, convert it to JSON using JSON.stringify().

// Errors to Watch For
// Invalid JSON String:

try {
  JSON.parse("{name:'Niraj'}"); // Keys must be in double quotes
} catch (err) {
  console.error("Invalid JSON:", err.message);
}

/*
The code uses the method JSON parse to try converting a text string into a JavaScript object.

The given string is written as open curly brace name colon single quote Niraj single quote close curly brace.

This is not valid JSON format because in JSON, all keys must be written inside double quotes.

Since the format is incorrect, JSON parse throws an error.

The code is wrapped inside a try block so that if an error happens, the program does not crash.

The catch block catches the error and prints a message using console error.

The message shows:
Invalid JSON colon followed by the actual error text, such as unexpected token or syntax error.

Expected Output
Invalid JSON colon Unexpected token name in JSON at position one
(Note: the exact wording may vary slightly depending on the browser)

Why This Is Useful
Helps prevent your program from crashing when receiving bad data

Useful when working with APIs or user input that may not always be formatted correctly

Allows you to show clear and helpful error messages to developers or users


 */

// Circular Reference:
const obj = {};
obj.self = obj;
JSON.stringify(obj); // Throws "TypeError: Converting circular structure to JSON"

/*
A JavaScript object named obj is created.
At first, it is just an empty object.

A new property called self is added to the object.
This property is assigned the object itself.

This creates a circular reference, meaning the object contains a reference to itself.
It is like an endless loop:
The object has a property that points back to the same object.

When you try to use JSON stringify to convert this object to a JSON string, it fails.

That is because JSON format does not support circular references.
JSON is meant to be a tree-like structure, not a loop.

So, the method throws an error.
The error says something like:
Type error, converting circular structure to JSON

Why This Error Happens
JSON stringify goes through each property of the object.

When it reaches the self property, it tries to stringify the same object again.

This keeps repeating forever, which JavaScript blocks by throwing an error.

How to Handle It
Remove or skip circular references before using JSON stringify

Use libraries like circular-json or flatted to handle this situation if needed


 */

// Method	                Purpose	                            Example Input	Example Output
// JSON.stringify()	   Convert object/array to JSON string	{name: "Niraj"}	'{"name":"Niraj"}'
// JSON.parse()	       Convert JSON string back to object	'{"name":"Niraj"}'	{name: "Niraj"}

// What is Local Storage?
// Local storage is a feature in the browser that allows you to store data permanently (until it's manually deleted), even after the page is refreshed or the browser is closed.

// It stores data as key-value pairs, and everything is saved as a string.

// Key Methods in Local Storage
// Set an item
// Save data into local storage
// Format:
// local storage dot set item with key and value
// Example:
// local storage set item with key name and value Niraj

// Get an item
// Retrieve data from local storage
// Format:
// local storage dot get item with key
// Example:
// local storage get item with key name returns Niraj

// Remove an item
// Delete a specific key and its value
// Format:
// local storage dot remove item with key

// Clear all items
// Delete everything in local storage
// Format:
// local storage dot clear

// Example Usage

localStorage.setItem("name", "Niraj");
let userName = localStorage.getItem("name");
console.log(userName); // Output: Niraj

// Important Notes
// Local storage only stores strings.
// If you want to store objects or arrays, use JSON.stringify before saving, and JSON.parse when retrieving.

// Example 1: Store a String Value
//  Save a user's name and retrieve it

localStorage.setItem("name", "Niraj");

let name = localStorage.getItem("name");
console.log(name); // Output: Niraj

// Example 2: Store a Number
// Save the user's age

localStorage.setItem("age", "23");

let age = localStorage.getItem("age");
console.log(age); // Output: 23

// Example 3: Store an Object
// Save a user profile (name and age)

const user2 = { name: "Niraj", age: 23 };

// Convert object to string
localStorage.setItem("user", JSON.stringify(user2));

// Convert back to object
const storedUser1 = JSON.parse(localStorage.getItem("user"));

console.log(storedUser1.name); // Output: Niraj
console.log(storedUser1.age); // Output: 23

// Example 4: Store an Array
// Save a list of skills

const skills2 = ["JavaScript", "React", "Node.js"];

localStorage.setItem("skills", JSON.stringify(skills2));

const storedSkills = JSON.parse(localStorage.getItem("skills"));
console.log(storedSkills[0]); // Output: JavaScript

// Example 5: Remove a Single Item
// Remove the stored name

localStorage.removeItem("name");

// Example 6: Clear All Local Storage
// Remove all data from local storage

localStorage.clear();

/*
Add a click event listener to a button that logs "Button clicked!" to the console.

Create a text input and button. On button click, log the input’s value using addEventListener.

Use localStorage.setItem() to store a name string when a button is clicked.

Use localStorage.getItem() to retrieve and display a saved name.

Use localStorage.removeItem() to delete a specific key.

Use localStorage.clear() to remove all stored data.

Store an object (e.g., user info) in localStorage using JSON.stringify().

Retrieve and convert the stored object using JSON.parse().

Add an event listener for the mouseover event to change background color.

Store and retrieve a user's theme (dark/light) preference in localStorage.

Create a simple form that saves name and email to localStorage on submit.

On page load, auto-fill the form fields using localStorage.getItem().

Add a "Clear Form" button that clears the fields and removes the values from localStorage.

Use addEventListener with keydown event to show which key is being pressed.

Create a counter app with + / - buttons and save the count in localStorage.

Create a task list where tasks are added to localStorage using stringify.

Display tasks on page load by parsing them from localStorage.

Add a delete button next to each task that removes it from both DOM and localStorage.

Implement a dark mode toggle that saves the theme in localStorage.

Use input event listener to save notes in localStorage while typing.

Build a mini to-do app that:

Adds, edits, deletes tasks

Stores everything in localStorage

Loads saved tasks on refresh

Create a notes app where each note is saved using setItem() with a unique key.

Build a login mockup where name/email is saved and shown after page reload using localStorage.

Use JSON.stringify() to store an array of objects in localStorage.

Build a color palette selector. On click, save the selected color. On reload, apply it.

Create a shopping cart system where selected items are stored in localStorage.

Save a blog post (title + content) to localStorage and display all saved posts.

Build a quiz app where the score is saved and shown from localStorage even after refresh.

Store scroll position on page unload, and restore it on load.

Create a tab-switcher layout and store the active tab in localStorage so it persists.


*/