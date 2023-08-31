function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    d();
    console.log('bb');
}
function d(){
    console.log('d');
    console.log('dd');
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

function x(){
    console.log('x');
    b();
    console.log('xx');
}
function y(){
    console.log('y');
    d();
    console.log('yy');
}
function z(){
    console.log('z');
    console.log('zz');
}
a();
x();