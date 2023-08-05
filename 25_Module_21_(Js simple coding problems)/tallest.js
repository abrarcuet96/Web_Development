function maxInArray(numbers){
    let first=numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(first<numbers[i]){
            largest=numbers[i];
        }
    }
    return largest;
}
const heights=[167,190,120,165,137,200];
const tallest= maxInArray(heights);
console.log('tallest person is',tallest);