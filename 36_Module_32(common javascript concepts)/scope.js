function add(a,b){
    const total=a+b;
    console.log(a,b);
    if(b>5){
        const sum=25+a+b;
    }
    else{
        const sum=5+a+b;
        var current =sum
    }
    // console.log(sum); //will not work.
    console.log(current); //var can be accessed.(hoisting-->upore nie jai)
    return total;
}
add(5,3);
// console.log(add(a,b)); //will not work.
// because a and b are avvailable inside function only.