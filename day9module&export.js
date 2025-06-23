// What are Modules in JavaScript?
// Modules allow you to break your code into separate files and share data/functions between them using export and import.

//  Supported natively in modern browsers and in Node.js (with ESM enabled).

//  1. export — Sharing Code from One File
// There are two ways to export:

//  a) Named Export
// You can export multiple items using their name.

// file: mathUtils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;


//  b) Default Export
// You can export only one thing as default.


// file: greeting.js
const greet = (name) => `Hello, ${name}!`;
// export default greet;

// You can also write:
export default function greet(name) {
  return `Hello, ${name}`;
}
//  2. import — Using Code in Another File
//  a) Import Named Exports
//  file: app.js
import { add, multiply } from './mathUtils.js';

console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20
//  You must use exact names with {}.

//  b) Import Default Export

//  file: app.js
import greet from './greeting.js';

console.log(greet("Niraj"));  // Hello, Niraj!

// Default export name can be anything during import.
//  c) Combine Both

//  mix.js
export const subtract = (a, b) => a - b;
export default function square(n) { return n * n; }

//  app.js
import square, { subtract } from './mix.js';

console.log(square(5));     // 25
console.log(subtract(8, 3)); // 5

// How to Run Module Code
// In Browser (you must use type="module")

<script type="module" src="app.js"></script>

// In Node.js
// Rename file as .mjs OR use "type": "module" in package.json
// Then run with node app.mjs or node app.js


// Export Type	Syntax	Import Syntax
// Named Export	export const name = ...	import { name } from './file'
// Default Export	export default something	import anyName from './file'
// Both	Use both together in one file	import defaultName, { named }
//  Bonus: Re-export from one file to another

// utils.js
export * from './mathUtils.js';
// Then import from utils.js.

