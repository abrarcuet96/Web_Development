function isInteger(number){
    if(typeof number !== 'number'){
        return 'please, provide a number';
    }
    else if(number%1==0){
        return true;
    }
    else{
        return false;
    }

}
console.log(isInteger(2));