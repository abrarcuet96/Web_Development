function isLeapYear(year){
    if(year%4==0){
        return 'the year is a leap year';
    }
    else{
        return 'the year is not a leap year';
    }
}
console.log(isLeapYear(1960));