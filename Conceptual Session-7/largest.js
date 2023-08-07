function largestNum(numbers){
    let largest=numbers[0];
    for(let number of numbers){
        if(largest<number){
            largest=number;
        }
    }
    return largest;
}
const num_array=[20,13,24,54,340,3,10,9,98,22,222];
console.log(largestNum(num_array));