const myMap = new Map();
myMap.set(1, 'Apple');
myMap.set('name', 'Alice');
myMap.set(true, 100);
myMap.set('isActive', false);
myMap.set(42, [1, 2, 3]);

console.log(myMap.size);

for (const [key, value] of myMap.entries()) {
  console.log('Key:', key);
  console.log('Value:', value);
}

console.log(myMap.has('name'));
console.log(myMap.has('unknown'));

const repeatedArray = [1, 2, 3, 1, 2, 3, 1];
const uniqueSet = new Set(repeatedArray);
console.log([...uniqueSet]);
