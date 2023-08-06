const phones=[
    {name:'Samsung',camera:12, storage:'32gb', price:36000, color:'silver'},
    {name:'Walton',camera:10, storage:'32gb', price:26000, color:'silver'},
    {name:'iPhone',camera:14, storage:'32gb', price:160000, color:'silver'},
    {name:'Xaomi',camera:9, storage:'32gb', price:56000, color:'silver'},
    {name:'Oppo',camera:7, storage:'32gb', price:46000, color:'silver'},
    {name:'Nokia',camera:10, storage:'32gb', price:76000, color:'silver'},
    {name:'HTC',camera:10, storage:'32gb', price:37000, color:'silver'},
];
function cheapestPhone(phones){
    let cheapest=phones[0];
    for(let i=0;i<phones.length;i++){
        const phone=phones[i];
        if(phone.price < cheapest.price){
            cheapest=phone;
        }
    }
    return cheapest;
}
const mySelection= cheapestPhone(phones);
console.log(mySelection);