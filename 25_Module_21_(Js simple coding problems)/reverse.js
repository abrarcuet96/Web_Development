function reverseString(text){
    for(let i=(text.length-1); i>=0; i--){
        const element=text[i];
        console.log(element);
    }
}
const myString= 'I am Iron Man';
const reversed= reverseString(myString);