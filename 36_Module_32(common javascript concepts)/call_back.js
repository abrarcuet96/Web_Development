// call back function:
function greeting(greetingHandler, name){
    greetingHandler(name);
}
// const number=[45,54,78];
// const laptop={
//     price: 45000,
//     brand:'lenovo',
//     memory:'8gb'
// };

function greetingHandler(name){
    console.log('good morning',name);
}
function greetEvening(name){
    console.log('good evening',name);
}
greeting(greetingHandler,'abrar');
greeting(greetingHandler,'haider');
greeting(greetEvening,'araf');

// call back function:
function submitHandler(){
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler);