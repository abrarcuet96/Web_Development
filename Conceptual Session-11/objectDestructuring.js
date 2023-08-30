const person1={
    name:'abrar',
    age:26,
    address:'rajshahi'
}
const {age,...rest}=person1;//do not need to maintain sequence.
console.log(age,rest);