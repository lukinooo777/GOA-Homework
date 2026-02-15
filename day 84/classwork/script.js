let products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Keyboard", price: 50 },
  { name: "Mouse", price: 30 },
  { name: "Monitor", price: 300 }
];

let productNames = products.map(product => product.name);
console.log(productNames);

let affordableProducts = products.filter(product => product.price < 100);
console.log(affordableProducts);

let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);

let productNamesReversed = products.reduceRight((acc, product, index) => {
  return index === products.length - 1 ? product.name : acc + " - " + product.name;
}, "");
console.log(productNamesReversed);



