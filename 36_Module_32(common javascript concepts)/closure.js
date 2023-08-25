// closure-->allows inner functions to access the outer scope of a function.
function kitchen(){
    let roast=0;
    return function(){
        roast++;
        return roast;
    }
}
const firstServer=kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());