const selectCategory = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const categoryToJson = await response.json();
    const categories = categoryToJson.data;
    categoryTitle(categories);
    const cardId = categories.category_id;
    selectCategoryCards(cardId);
}

const categoryTitle = (categories) => {
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
const selectCategoryCards = async (id = "1000") => {
    // console.log(id);
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const categoryCardToJson = await response.json();
    const categoryItems = categoryCardToJson.data;
    cardClick(categoryItems);
    sortView(id);
}
const sortView = (id) => {
    console.log(id);
    console.log(id.category_id);
    const categoryItems = document.getElementById('click-to-sort');
    categoryItems.textContent = '';
    const div = document.createElement('div');
    categoryItems.classList = `text-center my-8 flex justify-center gap-5`;
    div.innerHTML = `
    <a onclick="sortClick('${id}')" class="btn btn-ghost normal-case text-xl bg-slate-300">Sort by view</a>
    `;
    categoryItems.appendChild(div);
}
const sortClick = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const categoryCardToJson = await response.json();
    let categories = categoryCardToJson.data;
    let newCategory = [];
    let newIndex = [];
    for (const category of categories) {
        let cat = parseFloat(category.others.views);
        let index = categories.indexOf(category);
        newCategory.push({ cat, index });
        newIndex.push({ index });
    }
    const sortedProducts = sortArrayOfObjects(newCategory, 'cat', 'descending');
    let newCategories = [];
    for (const i of sortedProducts) {
        newCategories.push(categories[i.index]);
    }
    categories = newCategories;
    cardClick(categories);

}
const cardClick = (categories) => {
    const categoryCards = document.getElementById('category_cards');
    categoryCards.textContent = '';
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
        categories.forEach((category) => {
            const timeInSeconds = category.others.posted_date;
            const hours = parseInt(timeInSeconds / (24 * 360));
            const min = parseInt((parseFloat((timeInSeconds / (24 * 360)) - hours).toFixed(2)) * 60);
            const div = document.createElement('div');
            categoryCards.classList = `grid grid-cols-4 gap-10`;
            div.innerHTML = `<div class="w-[312px] h-96 card">
                    <div class="relative">
                    <img class="w-[312px] h-[200px] rounded-lg" src="${category.thumbnail}" alt="Shoes" />
                    <div id="time-duration" class="${hours==0 && min==0?"hidden":""}" >
                    <p class="text-center text-white w-[130px] h-7 rounded-lg bg-black absolute bottom-2 right-2">${hours} hr ${min} min</p>
                    </div>
                    </div>
                    <div class="card-body flex flex-row">
                        <div class="">
                            <img class="w-14 h-14 rounded-full" src="${category.authors[0].profile_picture}" alt="">
                        </div>
                        <div>
                            <h2 class="card-title font-bold">${category.title}</h2>
                            <div class="flex">
                                <p>${category.authors[0].profile_name}</p>
                            <div>
                            </div>${category.authors[0].verified?`<i class="fa-solid fa-certificate"></i>`:''} </div>
                            <p>${category.others.views} views</p>
                        </div>
                    </div>
                </div>`;
            categoryCards.appendChild(div);
        });
    }
}

selectCategory();