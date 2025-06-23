// app.js

// Import default + named
import developer, { greet, add } from "./utils.js";

console.log(greet(developer.name)); // Hello, Niraj!
console.log(`Skill Count: ${developer.skills.length}`); // 2
console.log(`2 + 3 = ${add(2, 3)}`); // 5
