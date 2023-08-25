/* 
Truthy:
1.truth
2.any number +ve or -Ve will be truthy other that 0
3.any string is truthy except empty string
4.'0'
5.'false'
6.empty object,{}
7.empty array,[]

Falsy:
1.false
2.0
3.''(empty string)
4.undefined.
5.null.
*/
let x = [];
if (x) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// optional:
// check falsy:
const y='';
if(!y){
    console.log('value of x is falsy');
}

// check truthy:
const z=' ';
if(!!z){
    console.log('value of x is truthy');
}