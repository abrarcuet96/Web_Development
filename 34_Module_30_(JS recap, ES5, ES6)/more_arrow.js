const difference = (x, y) => x - y;
const mul = (x, y, z) => x * y * z;

const getAge = (person) => person.age;
const student = {
    name: 'ananta',
    age: 45
}
const age = getAge(student);
console.log(age);

const getZ = numbers => numbers[2];
const z=getZ([5,9,4,2,12]);
console.log(z);

const doubleIt=num=>num*2;
console.log(doubleIt(2));

// no parameter:
const getPi=()=> Math.PI;
console.log(getPi());

// large arrow function:
const doMath= (x,y,z)=>{
    const sum=x+y+z;
    const mul=x*y*z;
    const result=sum+mul;
    return result;
}
console.log(doMath(2,3,4));