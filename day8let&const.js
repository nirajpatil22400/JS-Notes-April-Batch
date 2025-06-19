//JavaScript Notes:
//let and const
//let – Variable You Can Reassign
//Syntax:
//let variableName = value;
//Characteristics:
// Feature	Description
// Scope	Block Scoped (within {})
// Redeclaration	Not allowed in the same scope
// Reassignment	Allowed
// Hoisting	Hoisted but not initialized
// Examples:
// Reassignment is Allowed:

let age = 25;
age = 26;
console.log(age); // 26

// Redeclaration Not Allowed:

let name = "Niraj";
// let name = "Patil"; // Error: Identifier 'name' has already been declared

// Block Scope:

// let x = 10; // global variable

if (true) {
  let x = 20; // New variable x inside block // local variable
  console.log(x); // 20
}
console.log(x);
// console.log(x); // 10

/*
A variable named x is declared using let and given the value 10.
This variable x belongs to the outer or global block.

An if condition is checked which is always true.
Inside this block, another variable named x is declared using let and given the value 20.
This is a new and separate variable that exists only inside the if block.

When console.log(x) runs inside the if block, it prints the value of the inner x, which is 20.

The outer x is not affected by the inner x.

***Key Concept******:
Variables declared with let are block scoped.
This means a new variable can be declared inside a block with the same name as outside, and they will not conflict.
 */

// const – Variable You Cannot Reassign
// Syntax:
// const variableName = value;
// Characteristics:
// Feature	Description
// Scope	Block Scoped (within {})
// Redeclaration	Not allowed
// Reassignment	Not allowed
// Must Initialize?	Yes, at declaration
// Examples:
// Reassignment is Not Allowed:

//declare 
const PI = 3.14;
// PI = 3.14159; // Error: Assignment to constant variable

// Must Be Initialized:

const x; // SyntaxError
const x = 10;

// Block Scope:

const x = 1;//GV
{
  const x = 2;//LV
  console.log(x); // 2
}
console.log(x); // 1

// let vs const – Real World Example

let score = 0;          // Score can change
const maxScore = 100;   // Constant value

score = score + 10;     // Allowed
// maxScore = 200;      // Error

// Working with Objects and Arrays using const
// Although const variables cannot be reassigned, their internal content can still be modified.
// Object Mutation Allowed:

const user = { name: "Niraj", age: 23 };
user.age = 24;
console.log(user); // { name: "Niraj", age: 24 }

// Array Mutation Allowed:

const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

// Reassignment Not Allowed:

// numbers = [5, 6, 7]; // Error

// Summary – When to Use What
// Situation	Use
// Value changes later	Use let
// Fixed value	Use const
// Not sure yet	Start with const, change to let only if needed

// What If let and const Didn't Exist?
// - We would have to use only var
// - Increases chances of accidental redeclaration
// - Can lead to bugs due to incorrect scoping
// - Makes code harder to maintain and debug

// Practice Exercise

// let a = 10;
// a = 20;
// console.log(a); // 20

// const b = 30;
// // b = 40; // Error

// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]

// const obj = { name: "Niraj" };
// obj.name = "Patil";
// console.log(obj.name); // "Patil"

// 1.
let a = 10
// This line declares a variable named a using let and assigns the value 10 to it.
// let allows the variable to be reassigned later.
// 2.
a = 20
// The value of a is changed from 10 to 20.
// This is valid because let allows reassignment.
// 3.
console.log(a)
// This will display the current value of a, which is 20.
// Output will be
// 20
// ________________________________________
// 4.
const b = 30
// This line declares a constant variable named b and assigns the value 30.
// const means the variable cannot be reassigned.
// 5.
b = 40
// This will cause an error because variables declared with const cannot be changed after they are initialized.
// Result
// Error: Assignment to constant variable
// ________________________________________
// 6.
const arr = [1, 2, 3]
// A constant array named arr is declared.
// You cannot assign a new array to arr, but you can modify its contents.
// 7.
arr.push(4)
// This adds the number 4 to the end of the array.
// This is allowed because we are modifying the contents, not changing the reference.
// 8. console.log(arr)
// This will print the updated array.
// Output will be
// 1, 2, 3, 4
// ________________________________________
// 9.
const obj = { name: Niraj }
// A constant object named obj is declared with a property called name.
// 10.
obj.name = Patil
// The value of the name property is changed to Patil.
// This is allowed because we are not changing the object itself, only modifying its property.
// 11.
console.log(obj.name)
// This prints the updated value of the name property.
// Output will be
// Patil

