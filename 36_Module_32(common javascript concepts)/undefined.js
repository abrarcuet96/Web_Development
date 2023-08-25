/* 
8 ways to get undefined:
1. variable that is not initialized will give undefined.
2. function with no return.
3. parameter that is not passed will undefined.
4. if return has nothing on the right side will return undefined.
5. property that doesn't exist on an object will give you undefined.
6. accessing array elements outside of the index range will give undefined.
7. deleting an element inside an array.
8. set a value directly to undefined.
*/

let first;
console.log(first);
function second(a,b){
    const total=a+b;

}
const result=second();
console.log(result);

function third(a,b,c,d){
    const total=a+b+c+d;
    console.log(a,b,c,d);

}
third(2,5);

function noNeg(a,b){
    if(a<0 || b<0){
        return
    }
    return a+b;
}
const total=noNeg(2,-5);
console.log(total);

const fifth={
    id: 2,
    name:'ponchom',
    age:40
}
console.log(fifth.age, fifth.salary);

/* const sixth=[4,89,87,56,54];
console.log(sixth[1], sixth[5], sixth[10]); */

const sixth=[4,89,87,56,54];
delete sixth[1];
// you should not use it.
// instead  use splice
console.log(sixth[1], sixth[5], sixth[10]);

const eighth=undefined;
const ninth=null;

const data={
    results: [],
    updated: null
};

console.log(typeof undefined);
console.log(typeof null);