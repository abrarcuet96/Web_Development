// console.dir(document.domain);
// ```Traversing DOM Elements```

//``getElementById``:
//প্রথমে id টাকে ধরব --> getElementById()
// const h1= document.getElementById('parent-one');

//এবার চাইলে h1 কে কালার করতে পারব।
// h1.style.color='red';
// h1.style.fontSize='40px';

// h1 ট্যাগ এর মধ্যে যে টেক্সট আছে তা চেইঞ্জ করা।
// h1.innerText='DOM!! DOM!! DOM!!';
// console.log(h1);

//innerHTML ইউজ করব যখন সরাসরি Html এ চেইঞ্জ করব।

//``getElementsByClassName``:
/*
// class ধরার উপায় --> getElementsByClassName()
const allClasses= document.getElementsByClassName('item');
// চাইলে এখানে for loop ইউজ করে class এর ভিতরের আইটেমগুলো ধরা যাবে।
for(let item of allClasses){
    // console.log(item);
    // item.style.color='red';
}
// console.log(allClasses);
*/

//``getElementsByTagName``:
/*
// tag ধরার উপায় --> getElementsByTagName()
const allLiTags=document.getElementsByTagName('li');
// console.log(allH3Tags);
for(let i=0; i<allLiTags.length; i++){
    console.log(allLiTags[i]);
}
*/

// ``Query Selector``:
// Query selector দিয়ে id,class,tag সবই ধরা যায়।
// querySelector(), querySelectorAll()
// querySelector() শুধু প্রথমটা return করবে।
// Query Selector দিয়ে id ধরার উপায় --> querySelector(#)
// const h1=document.querySelector('#parent-one');
// console.log(h1);
// Query Selector দিয়ে class ধরার উপায় --> querySelector(.)
// const li=document.querySelector('.item');
// console.log(li);

// querySelectorAll() সবগুলো return করবে।
/* 
const li=document.querySelectorAll('.item');
// console.log(li);
for(let item of li){
    // console.log(item);
    item.style.color='green';
} 
*/

// ```Traversing DOM Hierarchy```

// const item=document.getElementsByClassName('grandparent');
// console.log(item[0]);
// or use,
// const item=document.querySelector('.grandparent');
// console.log(item);

// grandparent-->parent-->children
// const parent=document.querySelector('.grandparent');
// const children=parent.children;
// console.log(children[1].children[0]);

// granparent-->children
// const gp=document.querySelector('.grandparent');
// const children=gp.querySelectorAll('.item');
// console.log(children);

// children-->parent-->grandparent
// const children= document.querySelector('.item')
// const parent=children.parentElement.parentElement;
// console.log(parent);

// children-->grandparent
// const children= document.querySelector('.item');
// const gp=children.closest('.grandparent');
// console.log(gp);

// Father to Uncle:
// const parent1=document.getElementById('parent-one');
// const parent2=parent1.nextElementSibling;
// console.log(parent2);
// directly:
// const parent2=document.getElementById('parent-one').nextElementSibling;
// console.log(parent2);

// Uncle to Father:
// const parent2=document.getElementById('parent-two');
// console.log(parent2.previousElementSibling);