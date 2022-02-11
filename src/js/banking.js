function getInputValue() {
    const depositInputField = document.getElementById("deposit-input");
    const depositAmountText = depositInputField.value;
    const depositAmount = parseFloat(depositAmountText);

    // clear deposit input field
    depositInputField.value = '';

    return depositAmount;
}


document.getElementById("deposit-button").addEventListener('click', function () {
    /* const depositInputField = document.getElementById("deposit-input");
    const depositAmountText = depositInputField.value;
    const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue();

    const previousDepositTotalField = document.getElementById('deposit-total');
    const previousDepositTotalText = previousDepositTotalField.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText);

    const newDepositTotal = depositAmount + previousDepositTotal;
    previousDepositTotalField.innerText = newDepositTotal;

    const balanceField = document.getElementById('balance-total');
    const balanceText = balanceField.innerText;
    const balance = parseFloat(balanceText);

    const balanceTotal = balance + depositAmount;
    balanceField.innerText = balanceTotal;  
 
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawAmount = parseFloat(withdrawInputText);

    const previousWithdrawTotalField = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = previousWithdrawTotalField.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    const newWithdrawTotal = withdrawAmount + previousWithdrawTotal;
    previousWithdrawTotalField.innerText = newWithdrawTotal;

    const balanceField = document.getElementById('balance-total');
    const balanceTotalText = balanceField.innerText;
    const balanceTotal = parseFloat(balanceTotalText);

    balanceField.innerText = balanceTotal - withdrawAmount;
    

    withdrawInputField.value = ''

})