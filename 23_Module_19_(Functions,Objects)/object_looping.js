var shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    pen:25,
    mouse:1,
    shoes:2
}
const keys=Object.keys(shoppingCart);
for(var i=0; i<keys.length;i++){
    var propertyName=keys[i];
    var propertyValue=shoppingCart[propertyName];
    console.log(propertyName,propertyValue);
}

//or use for in loop:
for(var propertyName in shoppingCart){
    const value=shoppingCart[propertyName];
    console.log(propertyName,value);
}