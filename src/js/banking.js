function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear input input field
    inputField.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount + previousTotal;
}

function getCurrentBalance() {
    const balanceField = document.getElementById('balance-total');
    const balanceText = balanceField.innerText;
    const balance = parseFloat(balanceText);
    return balance;
}

function updateBalance(amount, isAdd) {
    const balanceField = document.getElementById('balance-total');
    /* const balanceText = balanceField.innerText;
     const balance = parseFloat(balanceText); */
    const balance = getCurrentBalance();

    if (isAdd == true) {
        balanceField.innerText = balance + amount;
    } else {
        balanceField.innerText = balance - amount;
    }

}


document.getElementById("deposit-button").addEventListener('click', function () {
    /* const depositInputField = document.getElementById("deposit-input");
    const depositAmountText = depositInputField.value;
    const depositAmount = parseFloat(depositAmountText); */

    /*     const previousDepositTotalField = document.getElementById('deposit-total');
        const previousDepositTotalText = previousDepositTotalField.innerText;
        const previousDepositTotal = parseFloat(previousDepositTotalText);
        previousDepositTotalField.innerText= depositAmount + previousDepositTotal; */

    /*
         const balanceField = document.getElementById('balance-total');
        const balanceText = balanceField.innerText;
        const balance = parseFloat(balanceText);
        balanceField.innerText = balance + depositAmount;
         */
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawAmount = parseFloat(withdrawInputText); */
    /* const previousWithdrawTotalField = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = previousWithdrawTotalField.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    previousWithdrawTotalField.innerText= withdrawAmount + previousWithdrawTotal; */
    /*  const balanceField = document.getElementById('balance-total');
     const balanceTotalText = balanceField.innerText;
     const balanceTotal = parseFloat(balanceTotalText);
     balanceField.innerText = balanceTotal - withdrawAmount; */
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }


})