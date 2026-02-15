function sayHello() {
  console.log("Hello");
}
function sayWorld() {
  console.log("World");
}
sayHello();
sayWorld();

setTimeout(() => console.log("First async done"), 2000);
setTimeout(() => console.log("Second async done"), 1000);

console.log("Start program");
setTimeout(() => console.log("Async 1s done"), 1000);
setTimeout(() => console.log("Async 2s done"), 2000);
console.log("End program");

setTimeout(() => console.log("Task 500ms done"), 500);
setTimeout(() => console.log("Task 1500ms done"), 1500);
setTimeout(() => console.log("Task 2000ms done"), 2000);

console.log("User logged in");
setTimeout(() => console.log("Fetching data..."), 2000);
setTimeout(() => console.log("Data received"), 1000);
