let first=5;
let second=7;
//approach-1:
/* 
const temp=first; //temp=5
first=second; // first=7
second=temp; // second=5
console.log(first,second); 
*/

//approach-2: destructuring.
/* 
[first, second]=[second,first];
console.log(first,second);  
*/