// 8. JavaScript Date and Time
// 1. Creating a Date Object

let now = new Date();
console.log(now); // Current date and time

// This creates a Date object representing the current date and time.

//2. Creating Custom Dates

let date1 = new Date("2025-05-28");
let date2 = new Date(2024, 11, 25); // Dec 25, 2024 (Month starts from 0)
let date3 = new Date(2024, 11, 25, 10, 30, 0); // Date with time
console.log(date1, date2, date3);


// Getting Date Values
// getFullYear()

let today = new Date();
console.log(today.getFullYear()); // e.g., 2025

// getMonth() (0 to 11)

console.log(today.getMonth()); // May = 4 (0-based index)

// getDate() — Day of the month (1-31)

console.log(today.getDate()); // e.g., 28

// getDay() — Day of the week (0-6)

console.log(today.getDay()); // 2 → Tuesday (Sunday = 0)

//  Getting Time Values
//  getHours(), getMinutes(), getSeconds()

console.log(today.getHours());   // e.g., 14 (2 PM)
console.log(today.getMinutes()); // e.g., 45
console.log(today.getSeconds()); // e.g., 10

//Setting Values

let d = new Date();

d.setFullYear(2023);
d.setMonth(0);        // January
d.setDate(15);        // 15th
d.setHours(10);
d.setMinutes(30);
console.log(d);


// Useful Methods
// toDateString()

console.log(d.toDateString()); // "Mon Jan 15 2023"

//toTimeString()

console.log(d.toTimeString()); // "10:30:00 GMT+0530"

//toLocaleString()

console.log(d.toLocaleString()); // "1/15/2023, 10:30:00 AM"

//Why Use Date?
// Use Case	Description
// Displaying time in UI	Current time, digital clock, calendar
// Comparing time	Count down, due date alerts
// Formatting logs	Attach timestamps in logging
// Scheduling tasks	Use future or past times
// Real-time features	Chat apps, event-based systems

// If Date Was Not Available?
// Without the Date object:
// You'd have to manually calculate day/month/year
// Hard to handle time zones
// Impossible to compare timestamps easily
// Messy formatting of time/date

// Tasks on Date and Time
// Basic Level
// Print today’s full date in this format: DD-MM-YYYY.
// Get current hour and display if it's AM or PM.
// Print the current day of the week (Sunday, Monday, etc.).

// Medium Level
// Create a function that takes a birthdate and returns the age.
// Build a digital clock using setInterval() and Date.

// Hard Level
// Make a countdown timer to a future date like "2025-12-31" showing days, hours, minutes left.
// Create a function to check whether a given date is on weekend or weekday.

