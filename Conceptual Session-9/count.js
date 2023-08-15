// using function:
let count=0;
function clickMe(){
    const element=document.getElementById('count');
    // console.log(element);
    count++;
    element.innerText=count;
}

// using addEventListener:
const btn =document.getElementById('minus-btn');
btn.addEventListener('click',function(){
    const element=document.getElementById('count');
    count--;
    element.innerText=count;
})