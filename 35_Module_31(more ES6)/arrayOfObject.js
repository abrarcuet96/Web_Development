const products=[
    {id:1,name:'lenovo',price:65000},
    {id:2,name:'dell',price:45000},
    {id:3,name:'hp',price:35000},
    {id:4,name:'mac',price:165000},
]

const names=products.map(product=>product.name);
// console.log(names);

products.forEach(p=>console.log(p.price));

const expensive=products.filter(p=>p.price>50000);
// console.log(expensive);

const affordable=products.find(p=>p.price<50000);
console.log(affordable);

const total=products.reduce((acum,current)=>acum+current.price,0);
console.log(total);