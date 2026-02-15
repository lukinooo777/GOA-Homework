class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `You borrowed "${this.title}"`;
    } else {
      return `Sorry, "${this.title}" is not available.`;
    }
  }
}



const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5]
]);

console.log(myMap.size);

for (let [key, value] of myMap.entries()) {
  console.log(key, value);
}

console.log(myMap.has("c"));



let arr = ["x", "y", "z", "x", "y", "z", "x", "y", "z"];
let unique = new Set(arr);
console.log(unique);