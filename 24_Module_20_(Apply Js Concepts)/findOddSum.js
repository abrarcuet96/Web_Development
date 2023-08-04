function getOddSum(numbers){
    let sum=0;
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]%2!=0){
            sum=numbers[i]+sum;
        }
    }
    return sum;
}
const myNumbers=[12,65,45,78,32,45,91];
console.log(getOddSum(myNumbers));