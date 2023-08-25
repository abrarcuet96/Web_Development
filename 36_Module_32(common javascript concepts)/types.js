// javascript is a dynamic type language:
// primitive type value:
const a = 5;
const b = 'abrar haider';
const d = true;
// non-primitive type value: keep the references.
const ages = [45, 76, 32];
const student = { id: 2, name: "abul" };

let x=5;
let y=x;
console.log(x,y); //5,5
y=7;//value reassign.
console.log(x,y);//5,7

let p={
    job: 'web developer'
}
let q=p;
q={
    job:'backend'
}
console.log(p,q);
