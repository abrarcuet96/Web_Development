function getAverage(ass1,ass2,ass3){
    const total=ass1+ass2+ass3;
    const avg=total/3;
    return avg;
}
var average=getAverage(59,60,60);
console.log(average.toFixed(2));