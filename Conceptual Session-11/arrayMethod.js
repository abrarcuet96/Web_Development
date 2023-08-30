// forEach, Map, Find, Filter, Reduce.
// forEach():
// it doesn't return an array.
/*
const arr = [1, 2, 3];
const a = x => console.log(x);
arr.forEach(a);
*/
/*
const arr = [1, 2, 3];
arr.forEach((x)=>console.log(x));
*/
/*
const fruits=['mango','apple','chingo'];
fruits.forEach(items=>console.log(items));
*/
/*
const arr=[1,2,3];
let sum=0;
arr.forEach(item=>sum+=item);
console.log(sum);
*/

// map():
// it returns an array.
/*
const arr=[1,2,3];
const result1=arr.forEach((item)=>item);
console.log(result1);
const result2=arr.map((item)=>item*2);
console.log(result2);
*/

/* const fruits=['mango','apple','chingo'];
// syntax: forEach((element,index,mainArray)=>{})
// fruits.forEach(((item,index,arr)=>console.log(item,index,arr)));
// fruits.map(((item,index,arr)=>console.log(item,index,arr)));
 */

// find method:
/* 
normal way:
const fruits=['mango','apple','chingo'];
const find=(fruits)=>{
    for(item of fruits){
        if(item=='apple'){
            return item;
        }
    }
    return null;
}
const x=find(fruits);
console.log(x); 
*/
/* 
// using find();
const fruits=['mango','apple','chingo'];
const y=fruits.find(item=>item=='apple');
console.log(y); 
*/


/* // filter method:
const fruits=['mango','apple','chingo','apple'];
// find and filter both are condition dependent.
const y=fruits.filter(item=>item=='apple');
console.log(y); 

const numbers=[1,2,3,4,5,6,7,8];
const filter=numbers=>{
    const result=[];
    for(let item of numbers){
        if(item%2==0){
            result.push(item);
        }
    }return result;
}
console.log(filter(numbers));

const evenNum=numbers.filter(item=>item%2==0);
console.log(evenNum); 
 */

// reduce:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = numbers.reduce((previous, current) => previous + current, 0); //0-->initial value.
const mul = numbers.reduce((previous, current) => previous * current, 1); //1-->initial value.
console.log(sum);
console.log(mul);