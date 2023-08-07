const obj={
    name:'abrar',
    age:24,
    address:'Chittagong',
    phone:'01757290312'
}

const keys=Object.keys(obj);
console.log(keys);
const values=Object.values(obj);
console.log(values);

// accessing objects using for loop:
/* 
for(let key of keys){
    console.log(obj[key]);
} 
*/

// for-in is used only for object:
for(let i in obj){
    console.log(i,':',obj[i]);
}
