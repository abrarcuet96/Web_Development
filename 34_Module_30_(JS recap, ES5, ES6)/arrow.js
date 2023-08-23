/*
function declaration: 
function add(a,b){
    const result = a+b;
    return result;
} */
function add(a, b) {
    return a + b;
}
const sum = add(5, 90);
// same thing:
// function expression:
const add2 = function (a, b) {
    return a + b;
}
console.log(add2(52,210));

// arrow function:
const add3 = (a, b) => a + b;
console.log(add3(5,210));

const add4=(num1,num2,num3)=> num1+num2+num3;
console.log(add4(5,210,21));

const mul=(num1,num2)=> num1*num2;
console.log(mul(3,12));