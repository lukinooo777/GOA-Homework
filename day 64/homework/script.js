function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// მაგალითები:
console.log(toFahrenheit(0));     // 32
console.log(toFahrenheit(100));   // 212
console.log(toFahrenheit(-40));   // -40




function repeatString(str, times) {
  return str.repeat(times);
}

// მაგალითები:
console.log(repeatString("hi", 3));   // "hihihi"
console.log(repeatString("abc", 0));  // ""