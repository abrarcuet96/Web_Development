function mindGame(x){
    if(typeof x !== 'number'){
        return 'please,provide a number';
    }
    else if(x<=0){
        return 'please, provide a positive number'
    }
    else{
        const result = (((x*3)+10)/2)-5;
        return result;
    }
}
console.log(mindGame('abrar'));
console.log(mindGame(-5));
console.log(mindGame(5));