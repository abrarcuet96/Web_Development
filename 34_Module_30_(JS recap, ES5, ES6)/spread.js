const max=Math.max(6,23,45,1,89,23);
console.log(max);

const numbers=[3,5,2,45,90,32,15];
// const arrayMax=Math.max(numbers); NaN
console.log(...numbers); //'...'-->spread operator.
const arrayMax=Math.max(...numbers)
console.log(arrayMax);

// use spread operator to copy.
const nums=[4,5,87,9];
const nums2=nums;
// nums2.push(12);
console.log(nums);
console.log(nums2);

const dosto=[...nums];
console.log(dosto);
nums.push(100);
console.log(dosto);
console.log(nums);

const sonkha=[...nums, 999];//add extr elements while copy.
console.log(sonkha);