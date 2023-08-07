/* 
~~slice~~
const arr=['ant','camel','duck','elephant','cat','dog'];
console.log(arr.slice(2,4)); // from index 2 to before index 4.
console.log(arr.slice(2)); // from index 2 to end. 
*/

/* 
~~splice~~
const arr=['ant','camel','duck','elephant','cat','dog'];
const result=arr.splice(2,3); // delete three elements from index 2.
console.log(arr);
console.log(result); 
*/

/* 
~~insertion using splice()~~
const arr=['ant','camel','duck','elephant','cat','dog'];
1| const result=arr.splice(2,0,'rat'); // before index 2 element and insert 'rat' in it's place.
2| const result=arr.splice(2,1,'rat'); // delete index 2 element and insert 'rat' in it's place.
console.log(arr); 
*/