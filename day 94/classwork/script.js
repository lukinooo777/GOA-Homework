function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function asyncOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async ფუნქცია (1 წამი) დასრულდა ");
    }, 1000);
  });
}

function asyncTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async ფუნქცია (2 წამი) დასრულდა ");
    }, 2000);
  });
}

console.log("სინქრონული შედეგები:");
console.log("Add:", add(2, 3));
console.log("Multiply:", multiply(2, 3));

console.log("\ნასინქრონული შედეგები:");
Promise.all([asyncOneSecond(), asyncTwoSeconds()])
  .then((results) => {
    results.forEach((r) => console.log(r));
  });
