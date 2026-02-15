function countryCard(country, capital) {
  return `Name: ${country}, Capital: ${capital}`;
}

console.log(countryCard("Portugal", "Lisbon"));



function greet(name) {
    return `გამარჯობა, ${name}!`;
}

function square(num) {
    return num * num;
}

console.log(greet("ნინო"));        
console.log(square(5));              



const multiply = function(a, b) {
    return a * b;
};

const isEven = function(n) {
    return n % 2 === 0;
}

console.log(multiply(3, 4));         
console.log(isEven(10));            



const add = (x, y) => x + y;

const sayHello = () => "hello world!";


console.log(add(7, 2));             
console.log(sayHello());            
