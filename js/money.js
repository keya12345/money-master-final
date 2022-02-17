/* ***Function-1: get input imcome and expenses**** */
function budgetMoney(moneyId) {
    const moneyInput= document.getElementById(moneyId)

    let moneyNumber= parseFloat(moneyInput.value);
    if(moneyNumber>0  ){
        return moneyNumber;
    }
    else if(moneyInput.value== " "){
        let moneyNumber=0;
        return moneyNumber;
    }
    else{
       const inputError=document.getElementById('input-error')
       inputError.style.display='block'
    }
    
}

/* ***Function-2:get total exprnses and balance id **** */
function countBalance(balance) {
    const accountOfMoney = document.getElementById(balance);
    return accountOfMoney;
}

/* ****Function-3:return expenses*** */
function expensesInput() {
const foodCost =budgetMoney('food-cost');
const rentCost=budgetMoney('rent-cost');
const clothesCost=budgetMoney('clothes-cost');
//const balance =countBalance('balance');

const totalCost = countBalance('total-expenses')

totalCost.innerText = (foodCost+rentCost+clothesCost);
const totalExpenses=parseFloat(totalCost.innerText);
return totalExpenses;
}

/* ***Function-4:return balance*** */
function balanceInput() {
    const balanceNumber =countBalance('balance');
    
const textShow=document.getElementById('error-msg')
const incomeMoney=budgetMoney('income');
/* ***error handler**** */
const totalExpenses=expensesInput()
if(totalExpenses<incomeMoney  ){
    balanceNumber.innerText=incomeMoney-parseFloat(totalExpenses)
    let balance =parseFloat(balanceNumber.innerText )
   
return balance;
}
else {
    
    
    textShow.style.display='block'
    
}
    
}

/* ***addEventListener-1:calculate expenses and balance*** */
document.getElementById('calculate-button').addEventListener('click',function () {
    expensesInput();
    balanceInput()
    

    
});

/* ****addEventListener-2:saveing money**** */
document.getElementById('save-button').addEventListener('click',function () {
    const saveInput = document.getElementById('save-input');
    const saveNumber= parseFloat(saveInput.value);
    const incomeMoney=budgetMoney('income');
    const balance =balanceInput()
    
    
   const savingAmount =document.getElementById('saving-amount');
   
   savingAmount.innerText= (incomeMoney*saveNumber)/100;
   const saveingValue = parseFloat(savingAmount.innerText)
const remainingBalance = document.getElementById('remaining-balance');

if(saveingValue<balance){
    remainingBalance.innerText= balance-saveingValue;
    console.log(remainingBalance.innerText);
}
else{
    const savebalanceError =document.getElementById('savebalance-error');
    savebalanceError.style.display='block'
}
    
})

