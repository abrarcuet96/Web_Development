const actor = {
    name: 'abrar',
    age: 30,
    phone: '01757290312',
    money: 123456789

}
// const phone=actor.phone;
// const name=actor.name;
// const age=actor.age;

// if right side is an object left side of destructuring will be an object as well.
// use property name as a variable that contains the property value.
const {phone, age}=actor;
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(age)
console.log(age)

// array destructuring:
const numbers=[45,99];
const [first,second]=numbers;
const [x,y]=[12,60];

// 
function doubleThem(a,b){
    return [a*2, b*2];
}
const [p,q]=doubleThem(6,9);
console.log(p,q);