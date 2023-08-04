// 7! = 7*6*5*4*3*2*1 :
function factorial(num){
    let mul=1;
    for(let i=1; i<=num; i++){
        mul=mul*i;
    }
    return mul;
}
console.log(factorial(7));