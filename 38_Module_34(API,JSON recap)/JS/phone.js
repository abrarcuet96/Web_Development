const loadPhone = async (searchText = '13', isShowAll) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await response.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones, isShowAll);
};
const displayPhones = (phones, isShowAll) => {
  // console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  // clear phone container cards before adding new cards.
  phoneContainer.textContent = '';
  // display show all button if there are more than 12 phones.
  const showAllContainer = document.getElementById('show-all-container')
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove('hidden');
  }
  else {
    showAllContainer.classList.add('hidden');
  }
  // is show all:

  // display only first 12 phones if not show all:
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  };
  phones.forEach((phone) => {
    // console.log(phone);
    // create a div:
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 shadow-xl`;
    // set innerHTML:
    phoneCard.innerHTML = `
    <figure>
    <img
      src="${phone.image}"
      alt="Shoes"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>`;
    phoneContainer.appendChild(phoneCard);
  });
  // hide loading spinner:
  toggleLoadingSpinner(false);
};
// handle show details:
const handleShowDetails = async (id) => {
  // load single phone data:
  const response = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await response.json();
  const phone = data.data;
  showPhoneDetails(phone);
}
// show phone details:
const showPhoneDetails = (phone) => {
  const phoneName = document.getElementById('show-detail-phone-name');
  phoneName.innerText = phone.name;

  const showDetailContainer = document.getElementById('show-detail-container');
  showDetailContainer.innerHTML = `
  <img src="${phone.image}" alt="">
  <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>

  `
  show_details_modal.showModal();
}
// handle search button:
const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhone(searchText, isShowAll);
}
const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if (isLoading) {
    loadingSpinner.classList.remove('hidden');
  }
  else {
    loadingSpinner.classList.add('hidden');
  }

}

// handle show all:
const handleShowAll = () => {
  handleSearch(true);
}
loadPhone();
