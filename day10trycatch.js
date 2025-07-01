/*
1.try...catch
What it does:
Code inside try is executed first.
If any error occurs, control goes to catch.
*/

// Basic Syntax:
try {
  // code that might throw error
} catch (error) {
  // handle the error here
}

// Example:

try {
  let user = JSON.parse('{"name":"Niraj"}'); // correct JSON
  console.log(user.name);//Niraj
} catch (err) {
  console.log("Something went wrong:", err.message);
}

/*
The try block is used to write code that might throw an error.
If an error happens inside the try block, the program does not crash.
Instead, control immediately jumps to the catch block.

Inside the try block, a string that looks like a JSON object is being parsed.
The method used is JSON parse, which converts a JSON-formatted string into a JavaScript object.
In this case, the string contains a name property with the value Niraj.
This is valid JSON, so parsing works successfully.

The parsed result is stored in a variable called user.
Now user becomes a regular JavaScript object with one property named name.

The next line prints the value of the name property of the user object.
The output will be Niraj.

Since there is no error in the JSON, the catch block is not executed.
 */

//  Error Example:

try {
  let user = JSON.parse("invalid_json"); // wrong JSON
  console.log(user.name);
} catch (err) {
  console.log("Error occurred:", err.message);
}

/*
A try block is used to run code that might cause an error.
This helps prevent the program from crashing when something goes wrong.

Inside the try block, the code is attempting to parse a string using JSON parse.
The string given is the word "invalid underscore json", which is not valid JSON format.

Because the string is not in proper JSON structure, the JSON parse method throws an error.
This means the code inside the try block stops running at that point.

Control jumps immediately to the catch block.
The catch block captures the error in a variable called err.

Inside the catch block, a message is printed that says "Error occurred" followed by the specific error message.
The error message comes from the message property of the error object.


 */

/**************************************************************************** */

/*
2. throw keyword
Purpose:
To create your own custom errors.
*/

// Example:
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log("Caught error:", err.message);
}

/*
A function named divide is created.
It takes two inputs: a and b.

Inside the function:

It first checks if the second input b is equal to zero.

If b is zero, it means division is not possible.

So the function throws a new error with the message "Division by zero is not allowed".

If b is not zero, the function returns the result of dividing a by b.

Next, the function is called inside a try block with the values ten and zero.

Since the second value is zero, the function throws an error.
The code inside the try block stops immediately at that point.

The control goes to the catch block where the error is received in a variable named err.

The catch block then prints a message:
"Caught error" followed by the actual message from the error, which is "Division by zero is not allowed".

What Happens When This Code Runs
The function tries to divide ten by zero.

The condition detects the problem and throws an error.

The error is caught by the catch block.

The message printed will be:

Caught error: Division by zero is not allowed

Why This Is Useful
It lets you handle dangerous operations safely.

Prevents the application from crashing.

Gives helpful feedback to the user or developer.

You can control what happens when errors occur, such as logging, alerts, or recovery steps.


 */
/**********************************************************************************/

/* 
3. finally block
This block always runs — whether an error happened or not.
Use it for cleanup, closing DB connections, hiding loaders, etc.
*/
//  Example:
try {
  let result = 10 / 2;
  console.log("Result:", result); //5
} catch (err) {
  console.log("Error:", err.message); //skipped
} finally {
  console.log("This will always run.");//This will always run.
}

/*
The code starts with a try block, which is used to write code that may cause an error.

Inside the try block:

The number ten is divided by two, which gives the result five.

The result is printed as:
Result colon five

Since this operation is valid and does not cause any error, the catch block is skipped.

Then the finally block runs.
The finally block runs no matter what — whether an error occurred or not.

Inside the finally block, a message is printed:
This will always run

What Happens When This Code Runs
The division works correctly.

The result is printed as five.

The catch block is ignored.

The finally block prints its message.

Expected Output
Result colon five
This will always run

Why This Is Useful
The try block lets you handle risky operations.

The catch block helps deal with errors if something goes wrong.

The finally block is always executed, which is helpful for cleanup tasks like closing a file, stopping a loading spinner, or resetting a form.


 */

// Name Validator
function validateName(name) {
  try {
    if (!name) {
      throw new Error("Name cannot be empty!");
    }

    if (typeof name !== "string") {
      throw new Error("Name must be a string!");
    }

    console.log(`Hello, ${name}`);
  } catch (err) {
    console.log(" Error:", err.message);
  } finally {
    console.log(" Name validation completed.");
  }
}

validateName("Niraj");
// Hello, Niraj
// Name validation completed.

validateName(123);
// Error: Name must be a string!
// Name validation completed.

/*
What the Function Does
A function named validateName is created to check if the input is valid before using it.
It uses try, catch, and finally to handle different situations safely.

Step-by-step Explanation
The function takes one input named name.

Inside the try block:

First, it checks if the name is missing or empty.
If it is, the function throws an error saying "Name cannot be empty".

Next, it checks if the name is not a string.
If it is not a string, it throws another error saying "Name must be a string".

If both checks pass, it prints a greeting message:
Hello comma space followed by the name

If any error is thrown inside the try block, the catch block runs.
It receives the error and prints the message with the word "Error" in front of it.

The finally block runs at the end, no matter what happens.
It always prints the message:
Name validation completed

What Happens When It Is Called
First Call: validateName with Niraj

Niraj is not empty

Niraj is a string

It prints: Hello comma Niraj

Then prints: Name validation completed

Second Call: validateName with number one two three

The value is not a string

The function throws an error

The catch block prints: Error colon Name must be a string

Then the finally block prints: Name validation completed

Expected Output
For the first call:
Hello comma Niraj
Name validation completed

For the second call:
Error colon Name must be a string
Name validation completed

Why This Is Useful
This pattern helps ensure the input is valid before using it

It prevents errors from crashing the application

The finally block ensures that some actions, like cleanup or messages, always happen
 */
