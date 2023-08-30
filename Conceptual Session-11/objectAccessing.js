/* 
const person1={
    name:'abrar',
    age:26,
    address:'rajshahi'
};

// dot notation:
console.log(person1.age);
// bracket notation:
console.log(person1['age']);
// assigning in a variable:
const propertyName='age';
console.log(person1[propertyName]); 
*/

const complexObject = {
    id: 1,
    name: "Main Object",
    info: {
        description: "This is a complex nested object.",
        author: {
            firstName: "John",
            lastName: "Doe"
        }
    },
    data: {
        values: [10, 20, 30],
        settings: {
            isEnabled: true,
            maxItems: 5
        }
    }
};
console.log('name: ',complexObject.name);
console.log('description: ',complexObject.info.description);
console.log('last-name: ',complexObject.info.author.lastName);
console.log('last-element-of-values: ',complexObject.data.values[complexObject.data.values.length -1]);