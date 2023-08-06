const friends=[12,45,32,22,44,62,29,68,87];
console.log('befor:',friends);
const partial=friends.splice(2,3,99,33,44,55); //will change the original array.
console.log('after:',friends);
console.log('removed:',partial);