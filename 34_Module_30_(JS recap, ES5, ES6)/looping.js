const numbers=[1,6,8,4];
// for(let i-0;i<numbers.length;i++){}
for(const num of numbers){
    console.log(num);
}
const nobab='siraj ud doula';
for(const char of nobab.split(' ')){
    console.log(char);
};

// for(const key of glass){
//     console.log(key);
// }
const glass={name:'glasss', color:'golden',price:12, isClean: true};
for(const key in glass){
    const value=glass[key];
    console.log(key,value);
}

const keys=Object.keys(glass);
console.log(keys);
for(const key of keys){
    const value=glass[key];
    console.log(key,value);
}

// for of use on array or string not in object.
// for in use on object.