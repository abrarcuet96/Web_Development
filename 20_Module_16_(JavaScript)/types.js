var price=100;
console.log(typeof price);

var price='100';
console.log(typeof price);

var price=true;
console.log(typeof price);

var romantic;
console.log(typeof romantic);

var num1=0.1;
var num2=0.2;
var sum=num1+num2;
sum=sum.toFixed(4); //returns a string. //fixed number after decimal point.
sum=parseFloat(sum);
console.log(sum);

// remainder:
var mangoes=20;
var eater=3;
// /--> vagfol
// %--> vagsesh
console.log(mangoes%eater);