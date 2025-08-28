// Part 1: Variables & Conditionals

let username = "JohnDoe";
let age = 22;

function checkAccess() {
  let message;
  if (age >= 18) {
    message = `Access granted to ${username}. ✅`;
  } else {
    message = `Access denied to ${username}. ❌`;
  }

  // Part 4: DOM interaction
  document.getElementById("user-message").textContent = message;
}

// Part 2: Custom Functions

function greetUser() {
  const greeting = `Hello, ${username}! Welcome back. 👋`;
  document.getElementById("greeting").textContent = greeting;
}

function calculateSum() {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    total += i;
  }
  document.getElementById("sum-result").textContent = `Sum of 1 to 10 is: ${total}`;
}

// Part 3: Loops

function showLoops() {
  const output = document.getElementById("loop-output");
  output.innerHTML = ""; 

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `For loop value: ${i}`;
    output.appendChild(li);
  }

  let j = 1;
  while (j <= 3) {
    let li = document.createElement("li");
    li.textContent = `While loop value: ${j}`;
    output.appendChild(li);
    j++;
  }
}

// Part 4: DOM Interactions

// Already demonstrated in:
// 1. checkAccess() updates #user-message
// 2. greetUser() updates #greeting
// 3. calculateSum() updates #sum-result
// 4. showLoops() dynamically updates #loop-output
