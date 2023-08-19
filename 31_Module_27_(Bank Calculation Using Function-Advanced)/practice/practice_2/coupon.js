document.getElementById('discount-btn').addEventListener('click', function () {
    const couponText = document.getElementById('coupon-field');
    const priceText = document.getElementById('price-text');
    const discountPriceText = document.getElementById('discount-text');
    const priceString = priceText.innerText;
    const price = parseFloat(priceString);
    const coupon = couponText.value;
    if (coupon == 'DISC30') {
        const discountPrice = price - (price * 30) / 100;
        discountPriceText.innerText = discountPrice;
    }
    else {
        alert('Wrong Code');
        discountPriceText.innerText = price;
    }

})