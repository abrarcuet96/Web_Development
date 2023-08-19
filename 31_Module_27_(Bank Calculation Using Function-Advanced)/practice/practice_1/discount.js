document.getElementById('discount-btn').addEventListener('click', function(){
    const priceText=document.getElementById('price-text');
    const discountPriceText=document.getElementById('discount-text');
    const priceString=priceText.innerText;
    const price=parseFloat(priceString);
    const discountPrice=price-(price*30)/100;
    discountPriceText.innerText=discountPrice;
})