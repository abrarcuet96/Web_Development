/* 
~~printing~~
console.log('Hello World!'); 
*/

/* 
~~variable~~
var x = 10; //variable declaration.
x=20; //re-declaration.
console.log(x); 
*/

/* 
~~variable naming convention~~
valid--> my_name,name1,$hello etc.
invalid--> 1hello, my-name, reserved keywords(var,if,else etc)
*/

/* 
~~data type~~
1. number datatype:
var age=24;
2.string datatype:
var name='abrar';
3.boolean datatype:
var isTrue = true;
*/

/* 
~~Type Casting: changing the datatype~~
var x=25.4565;
console.log(parseInt(x)); //converted to integer. 
var num='15.25';
console.log(typeof num); //to find the datatype.
console.log(parseFloat(x)); //converted to float. 

~~fixed decimal point~~
console.log(x.toFixed(n2)); // x=25.45
*/

/* 
~~mathematical operation~~
var x=5;
var y=10;
var z=x+y; //+,-,*,/,%
console.log(z); //z=15

x=x+1;
~shortHand~ 
x+=1
x++ //post increment  --> first print then increment.
++x //pre increment --> first increment then print.
*/

/* 
~~array~~
var numbers=[10,15,20,25,30,35,40];
console.log(numbers.length) //to find how many elements are there.
console.log(numbers[2]) //20

var kuddusVaierGf=['sadia','nadia'];
~~adding elements in an array at last~~
kuddusVaierGf.push('jorian');
~~removing elements from an array from last~~
kuddusVaierGf.pop()
*/

/* 
~~condition~~
var age=25;
if(age >= 18){
    console.log('you are an adult);
}
else{
    console.log('you are a teenager);
}
*/

/* 
~~loop~~
1.while loop:
var i=1;
while(i<=10){
    console.log('i am sorry');
    i++;
}

2.for loop:
for(var i=1; i<=10; i++){
    console.log('i am sorry');
}
*/

/* 
~~break~~
var num=[10,20,30,40,50];
for(var i=0; i< num.length; i++){
    console.log(num[i]);
    if(num[i]==30){
        break;
    }
}

~~continue~~
var num=[10,20,30,40,50];
for(var i=0; i< num.length; i++){
    console.log(num[i]);
    if(num[i]==30){
        continue;
    }
}
*/

/* 
~~ternary operator~~
var raining = true;
if(raining==true){
    console.log('baire jabona');
}
else{
    console.log('baire jabo');
}

// in single line using ternary operator:
raining == true? console.log('baire jabona') : console.log('baire jabo');
*/

/* 
var age=25;
var hasLicense=true;
if(age>=18){
    if(hasLicense==true){
        console.log('adult with license');
    }
    else{
        console.log('adult but has no license');
    }
}
else{
    console.log('you are a teenager');
}

// using ternary:
age>-18? hasLicense==true? console.log('adult with license') : console.log('adult but has no license') : console.log('you are a teenager');
*/