// What is a String in JavaScript?
// A string is a sequence of characters enclosed within quotes.
// Quotes can be single (''), double (""), or backticks (``) (template literals).

let str1 = "Hello";
let str2 = 'World';
let str3 = `Welcome to JavaScript`;


// length —  Get Length of String
// Returns the number of characters (including spaces and special characters).
let msg = "JavaScript";
console.log(msg.length); // Output: 10
//Explanation:
// "JavaScript" → J(1), a(2), v(3), a(4), S(5), c(6), r(7), i(8), p(9), t(10)
// Total: 10 characters

// 2. charAt(index) — Character at Position
// Returns the character at a specific index (starts from 0).
let lang = "JavaScript";
console.log(lang.charAt(0)); // Output: "J"
console.log(lang.charAt(4)); // Output: "S"
// Explanation:
// Index 0 → J, Index 4 → S

// 3. toUpperCase() / toLowerCase() — Change Case
let name = "niraj";
console.log(name.toUpperCase()); // Output: "NIRAJ"

let country = "INDIA";
console.log(country.toLowerCase()); // Output: "india"
// Explanation:
// Converts all characters of the string to uppercase or lowercase.

// 4. indexOf(substring) — Find Index of First Match
// Returns position of first occurrence of substring.
// If not found, returns -1.
let sentence1 = "I love JavaScript";
console.log(sentence1.indexOf("love")); // 2
console.log(sentence1.indexOf("code")); // -1

// 5. includes(substring) — Check If Present
// Returns true or false if substring is present.
let statement = "JavaScript is fun";
console.log(statement.includes("fun")); // true
console.log(statement.includes("hard")); // false

// 6. slice(start, end) —  Extract Portion
// Extracts characters from start to end-1 (non-destructive).
// Supports negative indexing.
let word1 = "JavaScript";
console.log(word1.slice(0, 4)); // Output: "Java"
console.log(word1.slice(-6));  // Output: "Script"
// Explanation:
// slice(0,4) → "Java" (0,1,2,3)
// slice(-6) → starts from 6th from end: "Script"

// 7. substring(start, end) —  Similar to slice()
// Same as slice but does not accept negative indexes.
let msg1 = "Frontend";
console.log(msg.substring(0, 5)); // "Fronte"

// 8. substr(start, length) — Legacy
// Extracts from start and takes length characters.
// Not recommended (deprecated).
let tool = "VisualStudio";
console.log(tool.substr(0, 6)); // "Visual"

// 9. replace(old, new) —  Replace Text
// Replaces first match.
let text = "I love coding in JavaScript";
console.log(text.replace("JavaScript", "Python")); // "I love coding in Python"
// To replace all matches, use regex:
let str = "a b a b a b";
console.log(str.replace(/a/g, "z")); // "z b z b z b"

// 10. split(separator) — Convert to Array
// Splits string into array using separator.
let names = "John,Tom,Alex";
let arr = names.split(",");
console.log(arr); // ["John", "Tom", "Alex"]

// 11. trim() — Remove Whitespace
// Removes leading and trailing spaces (not inside words).
let userInput = "   Niraj Patil   ";
console.log(userInput.trim()); // "Niraj Patil"

// Real-Life Use Case Examples
// Example 1: Capitalize First Letter
let word = "niraj";
let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
console.log(capitalized); // Niraj

// Example 2: Count Words in Sentence
let sentence = "JavaScript is a powerful language";
let words = sentence.split(" ");
console.log(words.length); // 5

// Example 3: Email Validation (simple)
let email = "test@example.com";
console.log(email.includes("@") && email.includes(".")); // true

// Advantages of Strings in JS
// Feature	Benefit
// Built-in methods	Powerful for manipulating text
// Immutable	Strings are safe from accidental changes
// Easy to loop	You can loop through characters
// Regex support	For advanced patterns
// Works with DOM	Often used to update webpage content

// Disadvantages
// Limitation	Reason
// Immutable	You can’t change a character directly
// Regex is hard to learn	Complex expressions for matching patterns
// Performance	Heavy string operations may slow things

// Without Strings — What Would Go Wrong?
// Handling user inputs would be nearly impossible.
// You couldn’t work with names, text, form data, etc.
// URLs, API data, HTML content, all use strings.

// Table
// Method	              Description	                      Returns
// .length	              Length of string	                  Number
// .charAt(i)	          Char at index	                      String
// .toUpperCase()	      All uppercase        	              New string
// .toLowerCase()	      All lowercase	                      New string
// .indexOf(x)	          Index of substring	              Number or -1
// .includes(x)	          If substring exists	              Boolean
// .slice()	              Extract part of string	          New string
// .replace()	          Replace first match	              New string
// .split()	              Split into array	                  Array
// .trim()	              Remove start/end spaces	          New string


// BASIC LEVEL TASKS
// Length Check
// Write a program to count how many characters are in the string "JavaScript is fun!".

// Character Access
// Print the first, last, and middle character of a string "frontend" using .charAt().

// Uppercase and Lowercase
// Convert the string "hello World" to:
// All uppercase
// All lowercase
// Find Substring
// Check the position of the word "love" in "I love JavaScript" using .indexOf().

// Includes Check
// Write a function that checks whether "@gmail.com" is present in an email string.

// Trim Spaces
// Clean this string using .trim(): " Niraj Patil " → "Niraj Patil"

//  MEDIUM LEVEL TASKS
// Capitalize First Letter
// Create a function that takes a lowercase name like "niraj" and returns "Niraj".

// Email Validator
// Validate if a string contains "@" and "." using .includes().

// Split Name
// Convert "Niraj Patil Developer" into an array of individual words.

// Custom Slice
// From "Welcome to JavaScript", extract only "JavaScript" using .slice().

// Replace Words
// In the sentence "Python is best", replace "Python" with "JavaScript".

// Count Words
// Write a function that counts how many words are in a sentence using .split(" ").

// HARD LEVEL TASKS
// Check Palindrome
// Write a function that checks if a string is a palindrome (same forward and backward), ignoring case and spaces.

// CamelCase Converter
// Convert "hello world program" into "helloWorldProgram" using .split(), .slice(), and .toUpperCase().

// Word Frequency Counter
// Count how many times each word appears in:
// "JavaScript is fun and JavaScript is powerful"
// Use .split(), a loop, and an object.

// Find All Vowels
// Write a function to find and return all vowels in a string. (Use loop + .includes())

// Email Masking
// Given an email like "xyz@gmail.com", mask it to:
// "x***@gmail.com"

// Reverse Words
// Reverse every word in a sentence:
// "JavaScript is awesome" → "tpircSavaJ si emosewa"

// Custom Replace All (no regex)
// Create a function that replaces all occurrences of "a" with "@" in a string without using regex.

// Mini Project: Smart Formatter
// Input: " hello, My name is xyz "
// Output:
// Trimmed
// Converted to lowercase
// First letter of each word capitalized
// Final output: "Hello, My Name Is xyz"





