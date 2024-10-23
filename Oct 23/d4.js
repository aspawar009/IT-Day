// 1. Asynchronous JavaScript Overview (Synchronous vs Asynchronous)
// Synchronous Example
console.log("Synchronous Start");
function syncTask() {
  for (let i = 0; i < 3; i++) {
    console.log(`Task ${i}`);
  }
}
syncTask();
console.log("Synchronous End");

// Asynchronous Example
console.log("\nAsynchronous Start");
setTimeout(() => console.log("Async Task"), 1000);
console.log("Asynchronous End");

// 2. Using Callbacks
// Callback Example 1
function fetchData(callback) {
  setTimeout(() => {
    callback("Data Fetched");
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

fetchData(displayData);

// Callback Example 2
function calculate(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

calculate(5, 10, (result) => console.log(`Sum: ${result}`));

// Callback Example 3
let arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
  console.log(`Array item: ${num}`);
});

// 3. JavaScript Promises
// Promise Example 1
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1500);
});
promise1.then((message) => console.log(message));

// Promise Example 2
let promise2 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise 2 Success!");
  } else {
    reject("Promise 2 Failure!");
  }
});
promise2
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// Promise Example 3
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 resolved"), 1000);
});
promise3.then((message) => console.log(message));

// 4. JavaScript Async/Await
// Async/Await Example 1
async function asyncFunction1() {
  let result = await new Promise((resolve) => {
    setTimeout(() => resolve("Async 1 Complete"), 2000);
  });
  console.log(result);
}
asyncFunction1();

// Async/Await Example 2
async function asyncFunction2() {
  let result = await Promise.resolve("Async 2 Immediate");
  console.log(result);
}
asyncFunction2();

// Async/Await Example 3
async function asyncFunction3() {
  let result = await new Promise((resolve) => {
    setTimeout(() => resolve("Async 3 Delayed"), 1000);
  });
  console.log(result);
}
asyncFunction3();

// 5. Handling Multiple Promises
// Promise.all Example 1
Promise.all([
  Promise.resolve("Promise.all 1 resolved"),
  Promise.resolve("Promise.all 2 resolved")
]).then((results) => console.log(results));

// Promise.race Example 2
Promise.race([
  new Promise((resolve) => setTimeout(resolve, 1000, "Race 1 resolved")),
  new Promise((resolve) => setTimeout(resolve, 500, "Race 2 resolved"))
]).then((result) => console.log(result));

// Promise.all Example 3
Promise.all([
  new Promise((resolve) => setTimeout(resolve, 1500, "All 1")),
  new Promise((resolve) => setTimeout(resolve, 1000, "All 2")),
  new Promise((resolve) => setTimeout(resolve, 2000, "All 3"))
]).then((results) => console.log(results));

// 6. Event Loop
console.log("\nEvent Loop Example Start");
setTimeout(() => console.log("First Timeout"), 0);
console.log("Log after Timeout Setup");
setTimeout(() => console.log("Second Timeout"), 0);
console.log("Event Loop Example End");
