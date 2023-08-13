const sections= document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    section.style.border='2px solid steelblue';
    section.style.marginBottom='5px';
    section.style.borderRadius='5px';
    section.style.paddingLeft='7px';
    section.style.backgroundColor='lightgray';
}

/* const placesContainer= document.getElementById('places-container');
placesContainer.style.backgroundColor='yellow'; */

// add and remove class:
const placesContainer= document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');