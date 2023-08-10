/* const numbers=[45,65,23,98,19];
for(let item of numbers){
    console.log(item);
} */

const products=[
    {id:1, name:'mobile - iphone 12 pro', price: 120000},
    {id:1, name:'labtop - asus', price: 130000},
    {id:1, name:'mobile - samsung 12 plus', price: 320000},
    {id:1, name:'laptop - dell', price: 520000},
    {id:1, name:'mobile - nokia 1200', price: 170000},
    {id:1, name:'desktop - ryzen', price: 140000},
    {id:1, name:'mobile - one plus 9', price: 220000},
    {id:1, name:'laptop - HP', price: 128000},
    {id:1, name:'mobile - Mi 10', price: 193000}
];
function matchedProducts(products,search){
    const matched=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result= matchedProducts(products, 'desktop');
console.log(result);