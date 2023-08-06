const country='Bangladesh';
const age=52;
const isIndependent=true;
const student={
    id:21,
    class:11,
    name:'abrar'
}
const friends=[13,14,15,16,21,20];
function add(num1,num2){
    return num1+num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// console.log(typeof friends); //not valid
console.log(Array.isArray(friends));
console.log(typeof add);

// to find anything inside an array:
console.log(friends.includes(16));
if(friends.indexOf(21)!==-1){
    console.log('it is there')
}
else{
    console.log('it is there');
}


// use concat to add arrays:
const newFriends=[12,13,14,65];
const allFriends= newFriends.concat(friends);
console.log(allFriends);