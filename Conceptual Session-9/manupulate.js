/* 
//innerText:
// প্রথম div এর যে ul আছে তার নিচে একটা h3 create করব।
const h3=document.createElement('h3')//<-- যা create করব তা এর ভিতরে বলে দিব।
// h3 এর ভিতরে যা লিখব।
h3.innerText='Made by JS';
// console.log(h3);
// এখন div টা ধরব।
const container=document.querySelector('.grandparent');
// এরপর h3 টা div এ append করব।
container.appendChild(h3); */

// innerText vs InnerHTML:
// innerText--> যখন সিঙ্গেল একটা element বানাব।
// innerHTML--> যখন multiple element বানাব।
// innerHTML:
// const container=document.querySelector('.grandparent');
// const div = document.createElement('div');
// div.innerHTML=`
//     <h1>Hello DOM</h1>
//     <h2>Hello JS</h2>
// `
// container.appendChild(div); //পরে append হবে।
// container.insertBefore(div,document.getElementById('parent-one')); //আগে append হবে।

// এই div এ class যেভাবে দিব।
// div.className='common-class';
// অথবা,
// div.classList.add('common-class');

// এই div এ attribute যেভাবে দিব।
// div.setAttribute('id','new-id');
// div.setAttribute('title','my-title');

// এই div এ attribute যেভাবে রিমোভ করব।
// div.removeAttribute('id');

// কোন child যেভাবে remove() করব।
// document.getElementById('remove-item').remove();
// or,
// const ul= document.getElementById('remove-item');
// const li= document.getElementById('first-item');
// ul.removeChild(li);
