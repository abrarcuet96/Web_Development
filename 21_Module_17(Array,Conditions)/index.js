// index of elements in array: will start from 0,1,2,...
var numbers=[45,68,78,56,89,98];
// get element value by index:
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);

// get element value by index and put in a variable:
var second=numbers[1];
console.log(second);

// setting an element value at an index:
numbers[1]=77;
numbers[3]=44;
console.log(numbers);

// find an element index:
var positionIndex=numbers.indexOf(89);
console.log(positionIndex);