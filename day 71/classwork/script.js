function modifyArray(inputArray) {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  
  let concatArray = array1.concat(array2);


  concatArray.copyWithin(concatArray.length - 2, 0, 2);


  concatArray.fill(0, concatArray.length - 3);

  const lastElement = concatArray.pop();


  const firstElement = concatArray.shift();


  concatArray.unshift(10, 20);

  // Return final results
  return {
    finalArray: concatArray,
    lastElement: lastElement,
    firstElement: firstElement
  };
}

const result = modifyArray();
console.log("Modified Array:", result.finalArray);
console.log("Last Element Removed:", result.lastElement);
console.log("First Element Removed:", result.firstElement);