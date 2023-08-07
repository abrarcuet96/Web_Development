function printDetails(person){
    if(typeof person !== 'object'){
        return 'please, provide me a valid object';
    }
    else{
        const name=person.name || 'nai';
        const age=person.age || 'nai';
        const email=person.email || 'nai';
        const bou=person.bou || 'nai';
        return 'amar nam '+name+'.amar boyos '+age+'. amar email '+email+'. amar bou '+bou;
    }
}
const obj={
    name: 'abrar',
    age: 24,
    email: 'abrarhaider1357@gmail.com'
}
console.log(printDetails(obj));
