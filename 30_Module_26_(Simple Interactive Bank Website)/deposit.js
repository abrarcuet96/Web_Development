// step-1: add event handler to deposit button.
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the input field.
    // always remember to use .value to get text from an input field.
    const depositField=document.getElementById('deposit-field');
    const newDepositAmount=depositField.value;
    // step-3: get the current deposit total amount.
    // always remember to use .innerText to get text from a non input.
    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositTotal=depositTotalElement.innerText;
    // step-4: add numbers to set the total deposit.
    const currentDepositTotal=parseFloat(previousDepositTotal)+parseFloat(newDepositAmount);
    depositTotalElement.innerText=currentDepositTotal;
    //step-7: clear the deposit field.
    depositField.value='';
    // step-5: get balance current total.
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotal=balanceTotalElement.innerText;
    // step-6 calculate current total balance.
    const currentBalanceTotal=parseFloat(previousBalanceTotal)+parseFloat(newDepositAmount);
    // set the balance total.
    balanceTotalElement.innerText=currentBalanceTotal;
})