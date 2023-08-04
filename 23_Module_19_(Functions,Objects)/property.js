var shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    pen:25,
    mouse:1
}
// when you know the specific property name, use dot notation to get the property value.
var penCount=shoppingCart.pen;
// when you know the specific property name, use dot notation to get the property value.(alternative)
var penCount2=shoppingCart['pen'];

// or,
var property_name='mouse';
var propertyValue=shoppingCart[property_name];
console.log(property_name, propertyValue);

// when you don't know the specific property name.
var properties_keys= Object.keys(shoppingCart);
var properties_values= Object.values(shoppingCart);
console.log(properties_keys);
console.log(properties_values);

// set property value:
shoppingCart.mouse=15;
console.log(shoppingCart);
// or;
shoppingCart['mouse']=29;
console.log(shoppingCart);