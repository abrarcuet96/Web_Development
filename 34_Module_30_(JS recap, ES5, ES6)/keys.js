// object={property:value};
const glass={name:'glasss', color:'golden',price:12, isClean: true};
console.log(glass);
// all property name:
const keys=Object.keys(glass);
// [ 'name', 'color', 'price', 'isClean' ]
console.log(keys);

// all property values:
const values=Object.values(glass);
// [ 'glasss', 'golden', 12, true ]
console.log(values);

const entries=Object.entries(glass);
/* 2D array/Array of Array:
[
  [ 'name', 'glasss' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isClean', true ]
]
 */
console.log(entries);

// delete glass.isClean;
// console.log(glass);

// isClean baade bakisob thakbe
const {isClean, ...shortGlass}=glass;
// { name: 'glasss', color: 'golden', price: 12 }
console.log(shortGlass);

// freeze: 
// Object.freeze(glass);
Object.seal(glass);
glass.price=20;//existing something can be changed.
glass.source='bangladesh';// eta korte dibe na
console.log(glass);