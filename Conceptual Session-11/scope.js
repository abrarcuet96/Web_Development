// global scope:
/* const x=5;
if(x<7){
    console.log(x);
}
 */
// let & const are block scope.[can be used only in block, not outside the block.]
// var is functional scoped.[can be used outside the block also.]-except function.
/* 
{
    let x=5;
    x++;
    console.log(x);
}
console.log(x); 
*/

// functional scope:
/* 
{
    var y=5;
    y++;
    console.log(y);
}
console.log(y); 
*/
/* 
function show(){
    var x=5;
    y=10;
}
show();
console.log(y);
console.log(x); 
*/

const x=5;
{
    const x=10;
    console.log('inside block: ',x);
}
console.log('outside block: ',x);