const country='Bangladesh';
const age=52;
const isIndependent=true;
const student={
    id:21,
    class:11,
    name:'abrar'
}
const friends=[13,14,15,16,21,20];
function add(num1,num2){
    return num1+num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// console.log(typeof friends); //not valid
console.log(Array.isArray(friends));
console.log(typeof add);

console.log(friends.includes(16));