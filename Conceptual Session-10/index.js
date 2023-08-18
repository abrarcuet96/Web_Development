let total=0;
function handleCLikBtn(target){
    const selectedItemContainer=document.getElementById('selected-items');
    const itemName=target.parentNode.childNodes[1].innerText;
    const li=document.createElement('li');
    li.innerText=itemName;
    selectedItemContainer.appendChild(li);

    const price=target.parentNode.childNodes[5].innerText.split(' ')[1];
    total=parseFloat(total)+parseFloat(price);
    const firstTotal=document.getElementById('total').innerText=total;
}