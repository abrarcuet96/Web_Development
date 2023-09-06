const selectCategory = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const categoryToJson = await response.json();
    const categories = categoryToJson.data;
    categoryTitle(categories);

    // console.log(categories);
}
const categoryTitle = (categories) => {
    // console.log(categories);
    categories.forEach((category) => {
        const categoryItems = document.getElementById('category-title');
        const div = document.createElement('div');
        categoryItems.classList = `text-center my-8 flex justify-center gap-5`;
        div.innerHTML = `
    <a onclick="selectCategoryCards('${category.category_id}')" class="btn btn-ghost normal-case text-xl bg-[#FF1F3D] text-white">${category.category}</a>
    `;
        categoryItems.appendChild(div);
    });
}

const selectCategoryCards = async (id, isTrue) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const categoryCardToJson = await response.json();
    const categoryItems = categoryCardToJson.data;
    // console.log(categoryItems);
    cardClick(categoryItems, isTrue);

}
const cardClick = (categories, isTrue) => {
    console.log(isTrue);
    const categoryCards = document.getElementById('category_cards');
    categoryCards.textContent = '';
    categoryCards.classList = '';
    if (categories.length == 0) {
        const div = document.createElement('div');
        div.innerHTML = `  
            <div class="justify-center flex items-center h-[70vh]">
            <div class="flex flex-col items-center my-4">
            <img class="w-[200px]" src="./resources/Icon.png" alt="">
            <h1 class="text-4xl font-bold text-center">Oops!! Sorry, There is no <br> content here</h1>
            </div>
            </div>
    `;
        categoryCards.appendChild(div);
    }
    else {
        if (isTrue==null) {
            categories.forEach((category) => {
                // console.log(category);

                const div = document.createElement('div');
                categoryCards.classList = `grid grid-cols-4 gap-10`;
                div.innerHTML = `<div class="w-[312px] h-96 card">
                        <img class="w-[312px] h-[200px] rounded-lg" src="${category.thumbnail}" alt="Shoes" />
                        <div class="card-body flex flex-row">
                            <div class="">
                                <img class="w-14 h-14 rounded-full" src="${category.authors[0].profile_picture}" alt="">
                            </div>
                            <div>
                                <h2 class="card-title font-bold">${category.title}</h2>
                                <div class="flex">
                                    <p>${category.authors[0].profile_name}</p>
                                </div>
                                <p>${category.others.views} views</p>
                            </div>
                        </div>
                    </div>`;
                categoryCards.appendChild(div);

            });
        }
        else if (isTrue) {
            let newCategory = [];
            let newIndex = [];
            for (const category of categories) {
                let cat = parseFloat(category.others.views);
                let index = categories.indexOf(category);
                newCategory.push({ cat, index });
                newIndex.push({ index });
            }
            // console.log(newCategory);
            // console.log(newIndex);

            const sortedProducts = sortArrayOfObjects(newCategory, 'cat', 'descending');
            // console.log(sortedProducts);
            let newCategories = [];
            for (const i of sortedProducts) {
                newCategories.push(categories[i.index]);

            }
            categories = newCategories;
            console.log(categories);
            categories.forEach((category) => {
                // console.log(category);

                const div = document.createElement('div');
                categoryCards.classList = `grid grid-cols-4 gap-10`;
                div.innerHTML = `<div class="w-[312px] h-96 card">
                            <img class="w-[312px] h-[200px] rounded-lg" src="${category.thumbnail}" alt="Shoes" />
                            <div class="card-body flex flex-row">
                                <div class="">
                                    <img class="w-14 h-14 rounded-full" src="${category.authors[0].profile_picture}" alt="">
                                </div>
                                <div>
                                    <h2 class="card-title font-bold">${category.title}</h2>
                                    <div class="flex">
                                        <p>${category.authors[0].profile_name}</p>
                                    </div>
                                    <p>${category.others.views} views</p>
                                </div>
                            </div>
                        </div>`;
                categoryCards.appendChild(div);

            });
        }
        // if (isTrue) {
        //     let newCategory = [];
        //     let newIndex = [];
        //     for (const category of categories) {
        //         let cat = parseFloat(category.others.views);
        //         let index = categories.indexOf(category);
        //         newCategory.push({ cat, index });
        //         newIndex.push({ index });
        //     }
        //     // console.log(newCategory);
        //     // console.log(newIndex);

        //     const sortedProducts = sortArrayOfObjects(newCategory, 'cat', 'descending');
        //     // console.log(sortedProducts);
        //     let newCategories = [];
        //     for (const i of sortedProducts) {
        //         newCategories.push(categories[i.index]);

        //     }
        //     categories = newCategories;
        //     console.log(categories);
        //     categories.forEach((category) => {
        //         // console.log(category);

        //         const div = document.createElement('div');
        //         categoryCards.classList = `grid grid-cols-4 gap-10`;
        //         div.innerHTML = `<div class="w-[312px] h-96 card">
        //                 <img class="w-[312px] h-[200px] rounded-lg" src="${category.thumbnail}" alt="Shoes" />
        //                 <div class="card-body flex flex-row">
        //                     <div class="">
        //                         <img class="w-14 h-14 rounded-full" src="${category.authors[0].profile_picture}" alt="">
        //                     </div>
        //                     <div>
        //                         <h2 class="card-title font-bold">${category.title}</h2>
        //                         <div class="flex">
        //                             <p>${category.authors[0].profile_name}</p>
        //                         </div>
        //                         <p>${category.others.views} views</p>
        //                     </div>
        //                 </div>
        //             </div>`;
        //         categoryCards.appendChild(div);

        //     });
        // }
        // console.log(categories);


        // categories.forEach((category) => {
        //     // console.log(category);

        //     const div = document.createElement('div');
        //     categoryCards.classList = `grid grid-cols-4 gap-10`;
        //     div.innerHTML = `<div class="w-[312px] h-96 card">
        //             <img class="w-[312px] h-[200px] rounded-lg" src="${category.thumbnail}" alt="Shoes" />
        //             <div class="card-body flex flex-row">
        //                 <div class="">
        //                     <img class="w-14 h-14 rounded-full" src="${category.authors[0].profile_picture}" alt="">
        //                 </div>
        //                 <div>
        //                     <h2 class="card-title font-bold">${category.title}</h2>
        //                     <div class="flex">
        //                         <p>${category.authors[0].profile_name}</p>
        //                     </div>
        //                     <p>${category.others.views} views</p>
        //                 </div>
        //             </div>
        //         </div>`;
        //     categoryCards.appendChild(div);

        // });

    }

}
// const clickedSort = (categories) => {
//     console.log(categories);
//     const categoryCards = document.getElementById('category_cards');
//     categoryCards.textContent = '';
//     categoryCards.classList = '';

//     // let newCategory = [];
//     // let newIndex = [];
//     // for (const category of categories) {
//     //     let cat = parseFloat(category.others.views);
//     //     let index = categories.indexOf(category);
//     //     newCategory.push({ cat, index });
//     //     newIndex.push({ index });
//     // }
//     // // console.log(newCategory);
//     // // console.log(newIndex);

//     // const sortedProducts = sortArrayOfObjects(newCategory, 'cat', 'descending');
//     // // console.log(sortedProducts);
//     // let newCategories = [];
//     // for (const i of sortedProducts) {
//     //     newCategories.push(categories[i.index]);

//     // }
//     // categories = newCategories;
//     // console.log(categories);
//     categories.forEach((category) => {
//         // console.log(category);

//         const div = document.createElement('div');
//         categoryCards.classList = `grid grid-cols-4 gap-10`;
//         div.innerHTML = `<div class="w-[312px] h-96 card">
//             <img class="w-[312px] h-[200px] rounded-lg" src="${category.thumbnail}" alt="Shoes" />
//             <div class="card-body flex flex-row">
//                 <div class="">
//                     <img class="w-14 h-14 rounded-full" src="${category.authors[0].profile_picture}" alt="">
//                 </div>
//                 <div>
//                     <h2 class="card-title font-bold">${category.title}</h2>
//                     <div class="flex">
//                         <p>${category.authors[0].profile_name}</p>
//                     </div>
//                     <p>${category.others.views} views</p>
//                 </div>
//             </div>
//         </div>`;
//         categoryCards.appendChild(div);

//     });
// }
// const isClicked = (isTrue) => {
//     selectCategoryCards(isTrue);
// }
const isSort = (isTrue) => {
    
    selectCategoryCards(isTrue);
}
const clickedSort = () => {
    isSort(true);
    // console.log('sorting started');
}


selectCategory();