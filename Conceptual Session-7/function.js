/* 
function showDetails(){
    console.log('hello world');
}
showDetails(); 
*/

/* 
passing argument-->parameter.
function printInfo(name){ here name is-->parameter
    console.log('valo hoie jao',name);
}
printInfo('masud'); 
here masud is-->argument
*/

/* 
function add(x,y){
    let total =x+y;
    return total;
}
const sumTotal=add(3,4);
console.log(sumTotal); 
*/

/* 
4 types of possible function syntax:
1. no parameters, no return.
2. parameters with no return.
3. no parameters with return.
4. parameters with return.
*/

//1. no parameters, no return.
function show(){
    console.log('hello');
}
//2. parameters with no return.
function add(x,y){
    console.log(x+y);
}
//3. no parameters with return.
function giveMoney(){
    const money=500;
    return money;
}
//4. parameters with return.
function multi(a,b){
    const result =a+b;
    return result;
}