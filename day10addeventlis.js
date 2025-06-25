// addEventListener() – What is it?
// The addEventListener() method attaches an event handler to an element without overwriting existing handlers.
// Syntax:
// element.addEventListener("event", callback);
//  Example Events:
// "click" – when a button is clicked
// "input" – when user types in input
// "mouseover" – when mouse hovers
// "keydown" – when key is pressed
// "submit" – when a form is submitted

//  Basic Example:

/*
<button id="btn">Click Me</button>

<script>
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    alert("You clicked the button!");
  });
</script>

 */

// Multiple Events
/*
<!DOCTYPE html>
<html>
<head>
  <title>addEventListener Demo</title>
</head>
<body>

  <input id="nameInput" placeholder="Type your name" />
  <button id="greetBtn">Greet</button>

  <h2 id="output"></h2>

  <script>
    const input = document.getElementById("nameInput");
    const button = document.getElementById("greetBtn");
    const output = document.getElementById("output");

    //  Click Event
    button.addEventListener("click", () => {
      const name = input.value;
      output.innerText = `Hello, ${name || "Guest"}!`;
    });

    // Keydown Event
    input.addEventListener("keydown", (event) => {
      console.log(`You pressed: ${event.key}`);
    });

    //  Focus Event
    input.addEventListener("focus", () => {
      input.style.borderColor = "green";
    });

    //  Blur Event
    input.addEventListener("blur", () => {
      input.style.borderColor = "gray";
    });
  </script>

</body>
</html>

 */
