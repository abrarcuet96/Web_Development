/* function isJavaScriptFile(filename){
    if(typeof filename !== 'string'){
        return 'please provide me a valid file name (string)';
    }
    else{
        // if(filename.toLowerCase().endsWith('.js')==true){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        return filename.toLowerCase().endsWith('.js');
    }
}
*/
function isJavaScriptFile(filename) {
    if (typeof filename !== 'string') {
        return 'please provide me a valid file name (string)';
    }
    else {
        const arr=filename.split('.');
        const lastElement=arr.pop();
        return lastElement.toLowerCase()=='js';
    }
}

console.log(isJavaScriptFile('hello.js'))
console.log(isJavaScriptFile('hello.html'))
console.log(isJavaScriptFile('hello.JS'))