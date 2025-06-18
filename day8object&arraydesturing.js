// What is Destructuring?
// Destructuring means breaking a complex structure (like an object or array) into individual variables.
//  It makes your code shorter, cleaner, and easier to understand.
// 1. Destructuring Objects
// Without Destructuring (dot notation)
const person = {
  name: "Niraj",
  age: 23,
  job: "Developer",
};

let name = person.name;
let age = person.age;
let job = person.job;

console.log(name); // Niraj
console.log(age); // 23

/**
 An object named person is created.
 This object contains three properties:


name with the value Niraj


age with the value twenty three


job with the value Developer


Individual variables are created to store each property from the object.


The variable named name is assigned the value from person’s name property.


The variable named age is assigned the value from person’s age property.


The variable named job is assigned the value from person’s job property.


Each variable is printed using console log.



Expected Output:
The variable name prints Niraj


The variable age prints twenty three


Note: In your code snippet, only name and age are logged. The job variable is not printed.

Why is this useful?
Accessing properties like this allows you to work with each value individually.
 This is called destructuring manually.
You can also use shorthand syntax using object destructuring if needed.

 */
// -------------------------------------------------------------------------------------
//  With Destructuring

const person1 = {
  name1: "Niraj",
  age1: 23,
  job1: "Developer",
};

let { name1, age1, job1 } = person1;

console.log(name1); // Niraj
console.log(age1); // 23
console.log(job1); // Developer
//  You pulled out the values in one line!
/*
An object named person is created.
 It contains three properties:


name with the value Niraj


age with the value twenty three


job with the value Developer


Instead of accessing each property one by one, a shorthand method called object destructuring is used.
 This allows you to extract all three values in one line.

 The line
 let open curly name, age, job close curly equals person
 means:


Create a variable named name and assign it the value from person’s name


Create a variable named age and assign it the value from person’s age


Create a variable named job and assign it the value from person’s job


Each variable is printed using console log.



Expected Output:
name will print Niraj


age will print twenty three


job will print Developer



Why is this Useful?
This method is shorter and cleaner.


It avoids writing multiple lines for each property.


It improves readability, especially when working with objects that have many properties.

 */
// -----------------------------------------------------------------------------------------------
// Rename While Destructuring

const person2 = {
  name2: "Niraj",
  age2: 23,
};

let { name2: fullName, age2: userAge } = person2;

console.log(fullName); // Niraj
console.log(userAge); // 23

/*
An object named person is created.
 It has two properties:


name with the value Niraj


age with the value twenty three


The destructuring syntax is used to extract values from the object.
 However, this time, the property names are being assigned to new variable names.

 Specifically:


The property name from the person object is assigned to a new variable called fullName


The property age from the person object is assigned to a new variable called userAge


So instead of creating variables named name and age, it creates fullName and userAge with the same values.


These new variables are then printed using console log.



Expected Output:
fullName will print Niraj


userAge will print twenty three



Why is this Useful?
You may want to rename the variables during extraction to avoid name conflicts or to make them more descriptive.


This is especially helpful when working with multiple objects or in larger codebases.



In Short:
You are extracting values from an object and renaming them during the extraction using object destructuring.





 */

// ----------------------------------------------------------------------------------------------
// Set Default Values

const person3 = {
  name3: "Niraj",
};

let { name3, age3 = 25 } = person3;

console.log(name3); // Niraj
console.log(age3); // 25 (default because age not present)

/*
An object named person is created.
 It has only one property:


name with the value Niraj
 There is no age property in the object.


The destructuring syntax is used to extract values from the object.


The value of name is assigned to a variable called name.


The value of age is assigned to a variable called age, but since age is not present in the object, a default value is provided.


So the code says:


If the age property exists in the object, use its value.


If it does not exist, use the default value twenty five.


The variables name and age are printed using console log.



Expected Output:
name will print Niraj


age will print twenty five
 This is because the object does not contain an age property, so the default value is used.



Why is this Useful?
It allows you to safely extract properties from an object even if some properties are missing.


You can ensure that your variables always have a value, either from the object or a fallback default.

 */

// ------------------------------------------------------------------------------------------------

//  2. Destructuring Arrays
// In arrays, destructuring is based on position, not key names.

//  Without Destructuring
const colors = ["red", "green", "blue"];

let first = colors[0];
let second = colors[1];
let third = colors[2];

console.log(first); // red
console.log(second); // green

/*
An array named colors is created.
 It contains three items: red, green, and blue.


The values from the array are assigned to separate variables manually:


The variable first gets the value at position zero in the array, which is red.


The variable second gets the value at position one in the array, which is green.


The variable third gets the value at position two in the array, which is blue.


The variables first and second are printed using console log.



Expected Output:
first will print red


second will print green



Why is this Useful?
It helps in working with specific elements from an array when you know their position.


You can use this method to assign values to readable variable names.

 */
// -------------------------------------------------------------------------------------------

// With Destructuring

const colors1 = ["red", "green", "blue"];

let [first1, second2, third3] = colors1;

console.log(first); // red
console.log(second); // green

/*
An array named colors is created.
 It contains three elements: red, green, and blue.


Instead of accessing each value one by one using index positions, a technique called array destructuring is used.

 The line
 let open square first, second, third close square equals colors
 means:


The first element of the array is assigned to the variable named first


The second element is assigned to the variable named second


The third element is assigned to the variable named third


Then, the values of first and second are printed using console log.



Expected Output:
first will print red


second will print green



Why is this Useful?
It allows you to extract multiple values from an array in a single line


Makes the code cleaner and more readable


Avoids repetitive syntax like colors at position zero, colors at position one, and so on

 */

// --------------------------------------------------------------------------------------
// Skip Elements
const colors3 = ["red", "green", "blue"];
let [, secondColor] = colors3;
console.log(secondColor); // green
/**
 *  It contains three items: red, green, and blue.


The array destructuring technique is used to extract values.
 In this line:
 let open square, secondColor close square equals colors


The first position in the array is skipped by leaving it empty before the comma


The second position is assigned to a variable named secondColor


When console log is used to print secondColor, it shows the value from the second position of the array, which is green.



Expected Output:
secondColor will print green

Why is this Useful?
You can skip unwanted elements in the array


It allows you to extract only the values you need from a list


Makes the code cleaner when you do not need every item in the array

 */
//----------------------------------------------------------------------------------------
//Set Default Values
const fruits = ["apple"];
let [a1 = "banana", b1 = "orange"] = fruits;
console.log(a1); // apple
console.log(b1); // orange (default)
/**
 * An array named fruits is created.
 It contains only one item: apple.


Array destructuring is used with default values:
 The line says:


Assign the first item of the array to a variable named a. If the first item is missing, use banana as the default value.


Assign the second item of the array to a variable named b. If the second item is missing, use orange as the default value.


Since the fruits array has only one item:


a gets the value apple from the array.


b has no corresponding value in the array, so it takes the default value orange.


The values of a and b are printed using console log.



Expected Output:
a will print apple
 b will print orange

Why is this Useful?
Default values ensure your variables always have a value, even if the array does not contain enough items.


Helps in avoiding undefined values when working with short or missing data.

 */
//------------------------------------------------------------------------
// Swap Values Using Array Destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
/**
 * Two variables are created:


a is assigned the value one


b is assigned the value two


Then a special syntax using array destructuring is used to swap their values in a single line.
 The line says:


Take the value of b and assign it to a


Take the value of a and assign it to b
 This works because JavaScript allows multiple assignments at once using array destructuring.


As a result:


a now holds the value two


b now holds the value one


The new values of a and b are printed using console log.



Expected Output:
a will print two
 b will print one

Why is this Useful?
It is a clean and short way to swap two values


No need for a third or temporary variable


Makes your code more readable and modern



 */
//--------------------------------------------------------------------------------

// Destructuring in Function Parameters
// Object in Parameters

function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "Niraj", age: 23 };
printUser(user); // Name: Niraj, Age: 23

/**
 * A function named printUser is created.
 This function accepts an object as its parameter.


Inside the function's parameter list, object destructuring is used directly.
 This means:


It automatically extracts the name and age properties from the object passed to the function.


These values are directly available inside the function as name and age variables.


Inside the function, a message is printed using those extracted values.
 The message will display the user's name and age in a readable format.


An object named user is created with two properties:


name with the value Niraj


age with the value twenty three


The printUser function is called and the user object is passed to it.



What Happens When This Code Runs:
The function receives the user object.


It pulls out the name and age from it.


Then it prints:
 Name colon space Niraj comma space Age colon space twenty three



Expected Output:
Name colon Niraj comma Age colon twenty three

Why is this Useful?
It saves time by avoiding extra lines of code to extract properties.


Makes your functions cleaner and easier to understand.


Especially useful when working with data objects that have many properties.

 */
// ----------------------------------------------------------------------

//Array in Parameters
function sum([x, y]) {
  return x + y;
}

console.log(sum([5, 10])); // 15

/*
It accepts one parameter, which is expected to be an array.


Inside the function's parameter list, array destructuring is used.
 That means:


The first value of the array is assigned to a variable named x


The second value is assigned to a variable named y


The function returns the result of x plus y.


The function is then called with an array containing the numbers five and ten.



What Happens When This Code Runs:
The array with values five and ten is passed to the function.


The values are extracted as x equals five and y equals ten


The function returns the sum, which is fifteen


The result fifteen is printed using console log



Expected Output:
Fifteen

Why is this Useful?
It allows you to work with array elements directly in the function definition


You avoid writing extra code inside the function body to access individual elements


Makes your code cleaner and more efficient



 */

// -------------------------------------------------------------------------------

//  Table
// Use Case	Method
// Get values from object	{ name, age } = obj
// Rename keys	{ name: fullName } = obj
// Set defaults	{ age = 25 } = obj
// Get array values	[a, b] = arr
// Swap values	[a, b] = [b, a]

//Practice Challenge for You:
const book = {
  title: "JS Mastery",
  author: "Niraj",
  year: 2025,
};
// Destructure the book object to get:
// 1. title
// 2. author renamed to writer
// 3. year with default = 2024

// Then log them all

/*
todays task 
Part 1: let and const (10 Tasks)
Declare a variable using let and reassign it.

Declare a variable using const and try to reassign it — observe the error.

Try to redeclare a let variable — what happens?

Try to declare a const without initializing — what happens?

Use let inside an if block and access it outside — what do you get?

Use var in a block and access it outside — what do you get?

Create an object with const and update one property — does it work?

Create an array with const and push a new item — does it work?

What happens if you reassign a new object to a const variable?

Write a code snippet that shows why let and const are block-scoped.

-----------------------------------------------------------------------------------

Part 2: Data Types (10 Tasks)
Declare and log variables of all primitive data types.

Use typeof to check the type of "Hello", 23, true, null, undefined.

Create an object with at least 3 properties and print them.

Create an array of 5 elements and access the third one.

Write code that returns NaN using math operations.

Use BigInt for a huge number — try adding 1n to it.

Create a symbol and compare it with another symbol of same description.

Create a variable, assign undefined, and log it.

Set a variable to null, check its type — why is it "object"?

Create a function and log its type using typeof.

-----------------------------------------------------------------------------------------------

Part 3: Arrow Functions (10 Tasks)
Write an arrow function that adds 2 numbers.

Write an arrow function that squares a number.

Write an arrow function that returns a greeting using a name parameter.

Convert a regular function to an arrow function.

Create an array of numbers and use .map() with an arrow function to double them.

Use .filter() with an arrow function to get even numbers from an array.

Write a one-liner arrow function that checks if a number is odd.

Create an arrow function with no parameters that returns your name.

Create an arrow function inside another function and access outer variable.

What happens when you use this inside an arrow function inside an object?

----------------------------------------------------------------------------------------

 Part 4: this Inside setInterval (5 Tasks)
Write a regular function with setInterval that increments this.age — see the bug.

Fix the above using arrow function.

Fix the bug using .bind(this) method.

Fix the bug by storing this into self variable.

Explain what this refers to inside a regular function vs arrow function.

-----------------------------------------------------------------------------------------

 Part 5: Template Literals (5 Tasks)
Create a variable name and print Hello ${name} using template literal.

Combine name, age, and city into one sentence using backticks.

Write a multiline sentence using template literal.

Embed an arithmetic expression inside ${}.

Embed a function call inside ${} and print result.

---------------------------------------------------------------------------------

Part 6: Destructuring Objects and Arrays (10 Tasks)
Create a person object and extract name, age using destructuring.

Rename name to fullName while destructuring.

Set a default value for a missing key while destructuring.

Destructure only one value from an object (like just job).

Destructure an object inside a function parameter.

Destructure the first and third value from an array of numbers.

Swap two variables using array destructuring.

Destructure nested object properties.

Destructure an array and set default value for missing elements.

Use destructuring inside a for...of loop.

-------------------------------------------------------------------

App Title: Background Developer Tracker
Objective:
Simulate a backend-only developer management system using core JavaScript concepts. The application will manage a developer's profile, update their status in the background, and allow user-defined actions on the developer object via JavaScript functions.

Project Question / Task
Build a JavaScript application (no HTML/CSS) that manages a developer's live status in the console, and supports dynamic profile modifications.

Core Requirements:
1. Use let and const Properly
Declare developer data using const

Use let or const where applicable in functions

2. Arrow Functions
All functions for updating profile (name, skills, location) must use arrow syntax

Include at least one arrow function that uses destructuring in parameters

3. Use this and setInterval
Create a constructor function or class (AutoStatusManager)

Use this and setInterval to toggle the developer's isWorking status every 5 seconds

Ensure this works correctly using arrow functions

4. Template Literals
Log all updates using template literals

Include full formatted developer profile in a clean, multi-line layout

5. Destructuring (Objects & Arrays)
Use object destructuring in functions that read developer info

Destructure arrays (skills) when needed (e.g., showing top skills)

Features to Implement
showProfile()
→ Logs developer name, age, skills, location, and status

updateName(newName)
→ Changes developer's name and logs confirmation

addSkill(skill)
→ Adds a new skill to the array, logs success, and shows updated profile

moveTo(location)
→ Changes developer location and logs the move

increaseAge()
→ Increments developer's age by 1 and logs a birthday message

showShortInfo()
→ Logs just name and location using destructuring

AutoStatusManager()
→ A function or class that toggles isWorking status using setInterval and this

 Example Output (Every 5 sec):
markdown

Status changed...
==============================
 Developer Profile
------------------------------
Name     : Niraj
Age      : 24
Location : Bangalore
Skills   : JavaScript, React, Node.js
Status   : Working
==============================
Challenge Rules (Optional)
Use arrow functions everywhere possible

Don’t use any global variables except the developer object

Prevent adding duplicate skills

Automatically stop updates after 1 minute (use clearInterval)

Handle undefined values using default values in destructuring

Deliverable:
A single app.js file

Runs only in Node.js or browser console (no UI)

Evaluation Criteria:
Category	Weight	Notes
JavaScript Concepts	40%	let/const, this, arrow, destructuring
Clean Logging	20%	Template literals, formatting
Functionality	30%	All features must work as expected
Code Structure	10%	Naming, DRY principle, readability

 */
