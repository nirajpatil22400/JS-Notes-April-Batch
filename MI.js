/*
Q1: Dynamic Student Report Card Generator
Description:
Create a program that manages a list of students, each with name, roll number, and an array of subject scores.
Generate:
Total marks
Average marks
Grade (using if-else, switch, ternary)
Status: Pass/Fail
Use:
Loops, array methods (map, reduce)
Object methods
Functions (arrow, normal, IIFE)
Example Input:
let students = [
  { name: "Niraj", roll: 101, scores: [88, 92, 79, 96, 85] },
  { name: "Rahul", roll: 102, scores: [45, 56, 67, 40, 60] }
];
Expected Output (for each student):
Name: Niraj
Total: 440
Average: 88
Grade: A
Status: Pass

solution->

// IIFE to encapsulate the logic
(function () {
  // Student data
  let students = [
    { name: "Niraj", roll: 101, scores: [88, 92, 79, 96, 85] },
    { name: "Rahul", roll: 102, scores: [45, 56, 67, 40, 60] },
    { name: "Pooja", roll: 103, scores: [35, 40, 30, 50, 45] },
  ];

  // Function to calculate total marks
  function calculateTotal(scores) {
    return scores.reduce((sum, score) => sum + score, 0);
  }

  // Arrow function to calculate average
  const calculateAverage = (total, numSubjects) => total / numSubjects;

  // Function to determine grade using switch
  function getGrade(avg) {
    switch (true) {
      case avg >= 90:
        return "A+";
      case avg >= 80:
        return "A";
      case avg >= 70:
        return "B";
      case avg >= 60:
        return "C";
      case avg >= 50:
        return "D";
      default:
        return "F";
    }
  }

  // Function to check pass/fail using ternary operator
  const getStatus = (avg) => (avg >= 40 ? "Pass" : "Fail");

  // Main logic loop
  students.forEach((student) => {
    let total = calculateTotal(student.scores);
    let avg = calculateAverage(total, student.scores.length);
    let grade = getGrade(avg);
    let status = getStatus(avg);

    console.log("---------------");
    console.log(`Name: ${student.name}`);
    console.log(`Roll No: ${student.roll}`);
    console.log(`Total: ${total}`);
    console.log(`Average: ${avg.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
    console.log(`Status: ${status}`);
  });
})();


------------------------------------------------------------------------------------

Q2: Custom Shopping Cart Logic
Description:
Build an object-based shopping cart system that allows:
Adding/removing items
Calculating total price (use reduce)
Showing quantity of each item
Applying discount if total > 1000 (ternary)
Methods for checkout, addToCart(), removeFromCart()
Features to Include:
Objects inside array
Methods inside object
Access object properties using both dot and bracket notation

solution->
// Shopping cart system
const shoppingCart = {
  cart: [],

  // Add item to cart
  addToCart(itemName, price, quantity = 1) {
    // Check if item already exists
    const existingItem = this.cart.find(item => item.name === itemName);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        name: itemName,
        price: price,
        quantity: quantity
      });
    }
    console.log(`Added ${quantity} x ${itemName} to cart.`);
  },

  // Remove item from cart
  removeFromCart(itemName) {
    const index = this.cart.findIndex(item => item.name === itemName);
    if (index !== -1) {
      console.log(`Removed ${this.cart[index].name} from cart.`);
      this.cart.splice(index, 1);
    } else {
      console.log(`${itemName} not found in cart.`);
    }
  },

  // View cart contents
  viewCart() {
    console.log("\nCart Items:");
    if (this.cart.length === 0) {
      console.log("Cart is empty.");
      return;
    }
    this.cart.forEach(item => {
      console.log(`- ${item.name} x ${item["quantity"]} @ ₹${item.price} each`);
    });
  },

  // Calculate total
  calculateTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // Checkout
  checkout() {
    const total = this.calculateTotal();
    const discount = total > 1000 ? 0.1 * total : 0;
    const finalAmount = total - discount;

    console.log("\Checkout");
    console.log(`Total: ₹${total}`);
    console.log(`Discount: ₹${discount}`);
    console.log(`Amount to Pay: ₹${finalAmount}`);
    console.log("Thank you for shopping!");
  }
};

// ----------- DEMO -------------
shoppingCart.addToCart("Shoes", 800, 1);
shoppingCart.addToCart("Bag", 500, 1);
shoppingCart.addToCart("Shoes", 800, 1);  // Add more Shoes

shoppingCart.viewCart();

shoppingCart.removeFromCart("Bag");
shoppingCart.viewCart();

shoppingCart.checkout();

---------------------------------------------------------------------------------------------------------

Q3: Employee Timesheet Tracker
Task:
Track daily working hours of multiple employees. Each employee has:
name, id, and hoursWorked: an array of hours per day.
Calculate:
Weekly total
Status (Active / Overworked / Lazy)
Use object + nested array
Use array methods: map, filter, reduce
Use control flow to determine status.
Store and retrieve the data using IIFE.bbbbbbbbbbbbbbbbbb

solution->

// IIFE to store and process employee timesheet data
(function () {
  const employees = [
    { name: "Niraj", id: 101, hoursWorked: [8, 9, 7, 10, 6, 0, 0] },
    { name: "Rahul", id: 102, hoursWorked: [5, 4, 6, 3, 2, 0, 0] },
    { name: "Asha", id: 103, hoursWorked: [10, 9, 10, 9, 10, 8, 6] },
  ];

  // Calculate total hours and determine status
  const summary = employees.map((emp) => {
    const total = emp.hoursWorked.reduce((acc, hrs) => acc + hrs, 0);

    // Determine employee status
    let status = "";
    if (total >= 50) {
      status = "Overworked";
    } else if (total >= 35) {
      status = "Active";
    } else {
      status = "Lazy";
    }

    return {
      name: emp.name,
      id: emp.id,
      totalHours: total,
      status: status,
    };
  });

  // Display summary
  console.log("Weekly Timesheet Summary:\n");
  summary.forEach((emp) => {
    console.log(`Name: ${emp.name}`);
    console.log(`ID: ${emp.id}`);
    console.log(`Total Hours: ${emp.totalHours}`);
    console.log(`Status: ${emp.status}`);
    console.log("--------------");
  });
})();


----------------------------------------------------------------------------------------

Q4: Quiz App (Command-line Simulation)
Scenario:
Simulate a 5-question quiz where questions and answers are stored in objects.
Each question should contain:
question, options, correctAnswerIndex
Use:
Loops to go through questions
prompt() to take answers
if-else or switch for logic
Final score display
Use functions and object methods
Use Date to track start and end time of quiz
Use Math.random() to shuffle questions

solution->
(function () {
  // Sample questions
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswerIndex: 2,
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "C++", "JavaScript", "Java"],
      correctAnswerIndex: 2,
    },
    {
      question: "What is the value of 2 + 2 * 2?",
      options: ["6", "8", "4", "10"],
      correctAnswerIndex: 0,
    },
    {
      question: "Which year was JavaScript created?",
      options: ["1995", "2005", "1985", "1999"],
      correctAnswerIndex: 0,
    },
    {
      question: "Which of these is NOT a primitive type in JS?",
      options: ["string", "boolean", "object", "number"],
      correctAnswerIndex: 2,
    },
  ];

  // Simulated user answers for testing (you can change these to simulate different scenarios)
  const userAnswers = [2, 2, 0, 0, 2]; // All correct

  // Shuffle questions and keep original answer pairing
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const shuffledQuestions = shuffleArray([...questions]);
  const startTime = new Date();
  let score = 0;

  // Quiz logic
  shuffledQuestions.forEach((q, index) => {
    const userAnswer = userAnswers[index]; // simulate user selection

    console.log(`Q${index + 1}: ${q.question}`);
    q.options.forEach((opt, idx) => {
      console.log(`   ${idx}: ${opt}`);
    });

    const isCorrect = userAnswer === q.correctAnswerIndex;
    console.log(
      `Your Answer: ${q.options[userAnswer]} → ${isCorrect ? "✅ Correct" : `❌ Incorrect (Correct: ${q.options[q.correctAnswerIndex]})`}`
    );
    console.log("---------------------------------------------------");

    if (isCorrect) score++;
  });

  const endTime = new Date();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

  // Final Output
  console.log(`🎯 Quiz Completed`);
  console.log(`✅ Total Score: ${score} / ${questions.length}`);
  console.log(`🕒 Time Taken: ${timeTaken} seconds`);
})();

-----------------------------------------------------------------------------------------------

Q5: Real-Time Weather Data Formatter (Mock)
Goal:
Given a mocked JSON array of weather data like:
let weatherData = [
  { city: "Pune", temp: 35.6, condition: "Sunny", wind: 12.5 },
  { city: "Mumbai", temp: 30.2, condition: "Cloudy", wind: 8.2 },
];
Tasks:
Loop through and format output as:
Weather in Pune: 36°C, Sunny, Wind: 12.5 km/h
Round temperature using Math.round()
Sort cities alphabetically
Use object and array destructuring
Use template strings
Show only cities with temp > 32°C using filter()

Solution->

// Mocked weather data
let weatherData = [
  { city: "Pune", temp: 35.6, condition: "Sunny", wind: 12.5 },
  { city: "Mumbai", temp: 30.2, condition: "Cloudy", wind: 8.2 },
  { city: "Delhi", temp: 42.1, condition: "Hot", wind: 9.8 },
  { city: "Goa", temp: 32.9, condition: "Humid", wind: 7.5 },
  { city: "Bangalore", temp: 28.3, condition: "Rainy", wind: 6.9 },
];

// Step 1: Filter cities with temp > 32°C
let hotCities = weatherData.filter(({ temp }) => temp > 32);

// Step 2: Sort cities alphabetically by name
hotCities.sort((a, b) => a.city.localeCompare(b.city));

// Step 3: Format output
hotCities.forEach(({ city, temp, condition, wind }) => {
  let roundedTemp = Math.round(temp); // Using Math.round()
  console.log(`Weather in ${city}: ${roundedTemp}°C, ${condition}, Wind: ${wind} km/h`);
});

 */
