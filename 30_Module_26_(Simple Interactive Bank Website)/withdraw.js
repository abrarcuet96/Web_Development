/* 
1. add event handler with the withdraw button.
2. get the withdraw amount from the withdraw input field.
also make share to convert the input into a number by using parseInt.
3. get previous withdraw total.
4. calculate total withdraw amount.
5. get the previous balance total.
6. calculate new balance total and set it.
7. clear the input field.
*/

// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;
    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;
    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    // step-7:
    withdrawField.value = '';
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You do not have that much money');
        return;
    }
    // step-4:
    const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step-6:
    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotalElement.innerText = newBalanceTotal;

})