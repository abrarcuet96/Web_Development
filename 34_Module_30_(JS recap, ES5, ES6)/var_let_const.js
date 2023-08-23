// var: no reason to use.
// let: allow it to reassign.
// const: do not allow it to reassign.

const money=25;
// money=50; will give error.

let count=0;
count=count+10;//it can be reassigned.
console.log(count);

const numbers=[23,4,21,12,56];
// numbers=[3,4,5,6]; will give error.
// but we can change inside the array.
numbers[1]=55;
numbers.push(8,9,65);
console.log(numbers);

const student={
    name: 'abrar',
    class: 12
}
// student={
//     name: 'haider',
//     class: 10
// } will give error.

// but we can change inside the object.
student.name='araf';
console.log(student);

// in loop we have to use let.
let sum=0;
for(let i=0;i<10;i++){
    sum=sum+1;
} 
console.log(sum);