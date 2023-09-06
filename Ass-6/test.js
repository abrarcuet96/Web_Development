const sortArrayOfObjects = (arr, propertyName, order = 'ascending') => {
    const sortedArr = arr.sort((a, b) => {
        if (a[propertyName] < b[propertyName]) {
            return -1;
        }
        if (a[propertyName] > b[propertyName]) {
            return 1;
        }
        return 0;
    });

    if (order === 'descending') {
        return sortedArr.reverse();
    }

    return sortedArr;
};
// let products = [
//     {
//         name: 'Product 1',
//         value:{
//             price: 100
//         }
//     },
//     { 
//         name: 'Product 2', 
//         value:{
//             price: 300
//         }
//     },
//     { 
//         name: 'Product 3', 
//         value:{
//             price: 50
//         }
//     },
//     { 
//         name: 'Product 4', 
//         value:{
//             price: 250
//         } 
//     },
// ];
// let newPrice=[];
// let newIndex=[];
// for(const product of products){
//     let price=product.value.price;
//     let index=products.indexOf(product);
//     newPrice.push({price,index});
//     newIndex.push({index});
// }
// // console.log(newPrice);
// // console.log(newIndex);

// const sortedProducts = sortArrayOfObjects(newPrice,'price', 'descending');
// // console.log(sortedProducts);
// let newProducts=[];
// for(const i of sortedProducts){
//     newProducts.push(products[i.index]);
    
// }
// products=newProducts
// console.log(products);