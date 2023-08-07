function sumOfArray(arr){
    let sum=0;
    for(let item of arr){
        sum=sum+item;
    }
    return sum;
}
function sumOfOdds(arr){
    let sum=0;
    for(let item of arr){
        if(item%2!=0){
            sum=sum+item;
        }
    }
    return sum;
}

const nums=[1,2,3,4,5,6,7,8,9];
console.log(sumOfArray(nums));
console.log(sumOfOdds(nums));